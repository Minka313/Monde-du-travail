#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CATALOGUE DES MÉTIERS DU TRANSPORT, DE LA LOGISTIQUE & SUPPLY CHAIN - PARTIE 1 (16 MÉTIERS)
Bloc A : Direction, Entrepôt, Manutention, Conduite Routière & Urbaine, Ferroviaire, Maritime, Aérien, Douane
Sources de référence :
- L'Étudiant : https://www.letudiant.fr/metiers/secteur/transportlogistique.html
- Bretagne Supply Chain : https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/
- Double ancrage géographique : France (€ brut/an) & Sénégal / Afrique de l'Ouest (FCFA net/mois)
"""

TRANSPORT_JOBS_PART1 = [
    # -----------------------------------------------------------------------
    # 1. DIRECTEUR SUPPLY CHAIN
    # -----------------------------------------------------------------------
    {
        "id": "directeur-supply-chain",
        "slug": "directeur-supply-chain",
        "title": "Directeur Supply Chain / Chief Supply Chain Officer (CSCO)",
        "aliases": ["Directeur de la chaîne logistique globale", "Directeur des opérations logistiques", "VP Supply Chain"],
        "icon": "🌐",
        "familyId": "transport-logistique",
        "domain": "Direction Supply Chain & Stratégie Globale",
        "domainId": "supply-chain-strategique",
        "subdomain": "Stratégie logistique & Pilotage des flux mondiaux",
        "shortDescription": "Définit et pilote la stratégie logistique globale de l'entreprise, des achats de matières premières jusqu'à la livraison finale aux clients.",
        "longDescription": "Le Directeur Supply Chain est un membre clé du comité de direction. Il orchestre l'ensemble des flux physiques, d'informations et financiers d'une entreprise à l'échelle nationale ou internationale. Son défi permanent consiste à optimiser les coûts, fiabiliser les délais, réduire l'empreinte carbone et maximiser la résilience face aux aléas géopolitiques, climatiques ou sanitaires.",
        "missions": [
            "Élaborer la stratégie globale de la chaîne d'approvisionnement et de distribution alignée sur les objectifs de croissance",
            "Superviser les budgets opérationnels et d'investissement (entrepôts automatisés, flottes, plateformes IT)",
            "Définir et négocier les partenariats stratégiques avec les grands transporteurs maritimes, aériens et terrestres",
            "Piloter la transition écologique des flux (décarbonation, report modal ferroviaire/fluvial, logistique inverse)",
            "Mettre en place des plans de continuité d'activité (PCA) et de gestion des risques sur les corridors mondiaux"
        ],
        "workEnvironment": ["Siège social d'un groupe industriel ou distributeur", "Comités de direction et déplacements internationaux", "Visites régulières des plateformes logistiques et hubs portuaires"],
        "typicalDay": [
            {"time": "08:30", "desc": "Analyse du tableau de bord exécutif : taux de service mondial (OTIF), ruptures critiques et coûts de fret"},
            {"time": "10:00", "desc": "Comité de direction : présentation du plan d'investissement pour l'automatisation du hub logistique régional"},
            {"time": "12:30", "desc": "Déjeuner de travail avec le directeur général d'un grand armateur maritime partenaire"},
            {"time": "14:30", "desc": "Revue de crise sur la congestion d'un corridor stratégique et activation d'un routage alternatif intermodal"},
            {"time": "17:00", "desc": "Validation des KPIs de réduction de l'empreinte carbone (Scope 3) pour le rapport RSE annuel"}
        ],
        "companyRole": "Stratège suprême des flux garantissant que les produits arrivent au bon endroit, au bon moment, au moindre coût et avec l'impact carbone le plus faible.",
        "skills": {
            "technical": [
                "Pilotage de la Supply Chain de bout en bout (End-to-End Supply Chain Management)",
                "Gestion budgétaire multi-millions d'euros et modélisation des coûts de revient logistique (Total Cost of Ownership)",
                "Maîtrise des écosystèmes ERP (SAP S/4HANA), WMS, TMS et plateformes de visibilité prédictive",
                "Réglementation du commerce international (Incoterms 2020, douanes, conventions maritimes et terrestres)"
            ],
            "human": ["Vision stratégique et leadership affirmé", "Résistance au stress et gestion de crise", "Excellence relationnelle et négociation internationale", "Capacité d'anticipation et d'agilité"],
            "tools": ["SAP S/4HANA Supply Chain", "Oracle SCM Cloud", "FourKites / Project44 (visibilité temps réel)", "Power BI / Tableau (Analytics)", "Blue Yonder / Kinaxis"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +5 (Master / Ingénieur / Commerce)", "title": "Diplôme d'École de Commerce, d'École d'Ingénieurs ou Master universitaire en Supply Chain", "desc": "Spécialisation en logistique internationale, recherche opérationnelle ou gestion des opérations."},
                {"step": "Expérience (10 à 15 ans)", "title": "Parcours évolutif confirmé", "desc": "Postes préalables de Responsable logistique, Directeur d'entrepôt, Responsable approvisionnements ou Consultant senior."}
            ],
            "schools": [
                {"name": "Kedge Business School (ISLI - MSc Global Supply Chain Management) — France", "country": "France", "scope": "France"},
                {"name": "École des Ponts ParisTech / CentraleSupélec (Master Spécialisé Supply Chain) — France", "country": "France", "scope": "France"},
                {"name": "BEM Management School Dakar (Master Global Supply Chain & Maritime) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur de Management (ISM Dakar - MBA Supply Chain & Transport) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["APICS CSCP (Certified Supply Chain Professional)", "APICS CPIM (Certified in Planning and Inventory Management)", "Lean Six Sigma Black Belt"]
        },
        "career": {
            "sectors": ["Grande Distribution & E-commerce", "Industrie Aéronautique, Automobile & Pharmaceutique", "Agroalimentaire & FMCG", "Prestataires logistiques 3PL/4PL"],
            "employerTypes": ["Multinationales", "Grandes entreprises industrielles", "Groupes de logistique internationale", "Distributeurs omnicanaux"],
            "evolution": ["Directeur Général des Opérations (COO)", "Directeur Général d'entreprise ou de filiale", "Administrateur indépendant & Senior Advisor"],
            "pros": ["Poste d'influence stratégique au sommet de l'entreprise", "Rémunération très élevée", "Rôle crucial pour la compétitivité et la souveraineté économique"],
            "cons": ["Pression constante liée aux crises logistiques mondiales", "Disponibilité continue exigée", "Déplacements fréquents"]
        },
        "gettingStarted": {
            "beginnerProject": "Cartographier la chaîne logistique complète d'un produit du quotidien (ex: un smartphone ou un café) depuis l'extraction des matières premières jusqu'à l'utilisateur final en identifiant chaque intermédiaire et mode de transport.",
            "steps": [
                "Acquérir les fondamentaux des Incoterms 2020 et des flux de transport multimodal",
                "Comprendre le fonctionnement d'un modèle SCOR (Supply Chain Operations Reference)",
                "Se former aux outils de modélisation de flux et de data analytics logistique"
            ],
            "freeResources": ["MOOC Coursera Supply Chain Management", "Publications de l'ASLOG et de Bretagne Supply Chain", "Rapports de la Banque Mondiale sur l'Indice de Performance Logistique (LPI)"]
        },
        "aiImpact": {
            "summary": "L'IA générative et prédictive révolutionne la prise de décision stratégique en simulant des scénarios de crise mondiaux (jumeaux numériques de supply chain) et en prédisant les ruptures d'approvisionnement.",
            "positiveImpacts": ["Visibilité prédictive en temps réel sur les flux mondiaux", "Optimisation algorithmique multi-critères des coûts et des émissions CO2"],
            "risksAndChallenges": ["Dépendance aux modèles d'IA en cas de rupture de données", "Cybersécurité des plateformes de traçabilité interconnectées"],
            "recommendedSkills": ["Pilotage de jumeaux numériques de supply chain", "Data governance et audit des algorithmes d'allocation des stocks"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, avec l'expansion du Port Autonome de Dakar, la construction du port multifonction de Ndayane (DP World) et la Plateforme Industrielle Internationale de Diamniadio (PDI), les Directeurs Supply Chain sont ardemment recherchés pour connecter le Sénégal aux corridors ouest-africains.",
            "westAfricaOpportunities": "Rôle pivot dans l'opérationnalisation de la ZLECAF (Zone de Libre-Échange Continentale Africaine) et l'intégration des corridors logistiques Dakar-Bamako et Abidjan-Ouagadougou.",
            "localChampions": ["Bolloré Logistics / AGL Sénégal", "DP World Dakar", "Grimaldi Sénégal", "CFAO Sénégal", "Kirène / Groupe SIAGRO"]
        },
        "salary": {
            "france": {"entry": 75000, "mid": 110000, "expert": 180000, "currency": "EUR", "period": "an", "note": "Salaires fixes + bonus de performance substantiel (15 à 30%)"},
            "senegal": {"entry": 1800000, "mid": 3000000, "expert": 5500000, "currency": "FCFA", "period": "mois", "note": "Rémunération de direction générale dans les multinationales et grands groupes au Sénégal"}
        },
        "connectedFamilies": ["droit-management", "commerce-marketing", "industrie-mecanique"],
        "relatedJobs": ["supply-chain-manager", "responsable-entrepot", "consultant-supply-chain"],
        "sources": [
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Directeur-rice Supply Chain", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers du secteur transport et logistique", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique.html", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Durant les perturbations mondiales de 2021-2023, les entreprises dotées d'une direction Supply Chain agile ont vu leur rentabilité progresser de 15% par rapport à leurs concurrents directs.",
            "pourquoi": "La maîtrise des flux et la capacité de reroutage rapide transforment la logistique de simple centre de coûts en avantage concurrentiel décisif.",
            "a_retenir": "Le Directeur Supply Chain est le chef d'orchestre de la mondialisation industrielle et commerciale."
        }
    },

    # -----------------------------------------------------------------------
    # 2. SUPPLY CHAIN MANAGER
    # -----------------------------------------------------------------------
    {
        "id": "supply-chain-manager",
        "slug": "supply-chain-manager",
        "title": "Supply Chain Manager / Responsable Chaîne Logistique",
        "aliases": ["Gestionnaire de chaîne d'approvisionnement", "Responsable logistique globale", "Supply Chain Coordinator"],
        "icon": "🔄",
        "familyId": "transport-logistique",
        "domain": "Direction Supply Chain & Stratégie Globale",
        "domainId": "supply-chain-strategique",
        "subdomain": "Coordination tactique & Alignement des flux",
        "shortDescription": "Coordonne l'ensemble des maillons de la chaîne logistique, des prévisions de vente aux approvisionnements, stockage et expéditions.",
        "longDescription": "Le Supply Chain Manager fait le pont entre la stratégie de la direction et les réalités opérationnelles du terrain. Il synchronise l'offre et la demande (processus S&OP), supervise la gestion des flux de matières et de produits finis, et résout les goulots d'étranglement pour garantir le respect rigoureux des engagements clients au coût le plus juste.",
        "missions": [
            "Animer le processus mensuel S&OP (Sales and Operations Planning) reliant ventes, production et logistique",
            "Superviser les niveaux de stock globaux pour éviter à la fois les ruptures et le surstockage coûteux",
            "Coordonner les équipes d'approvisionnement, d'ordonnancement, d'entreposage et de transport",
            "Analyser les écarts de performance opérationnelle (taux de service client, rotation de stock, délais de livraison)",
            "Déployer des projets d'amélioration continue (Lean Logistics, 5S, réduction des temps de cycle)"
        ],
        "workEnvironment": ["Usine de production ou centre de distribution", "Open space logistique en lien avec le terrain", "Réunions interservices avec commerce, production et finances"],
        "typicalDay": [
            {"time": "08:15", "desc": "Revue des indicateurs de service de la veille et identification des commandes urgentes en souffrance"},
            {"time": "09:30", "desc": "Point de synchronisation avec le responsable de production et le chef d'entrepôt sur les cadences"},
            {"time": "11:30", "desc": "Réunion pré-S&OP avec les équipes commerciales pour ajuster les prévisions du trimestre suivant"},
            {"time": "14:00", "desc": "Négociation avec un transporteur sous-traitant pour absorber un pic de volume imprévu"},
            {"time": "16:30", "desc": "Analyse des causes racines d'un retard de livraison sur un compte client stratégique"}
        ],
        "companyRole": "Régulateur tactique garantissant la parfaite harmonie entre ce qui est vendu, ce qui est fabriqué et ce qui est livré.",
        "skills": {
            "technical": [
                "Maîtrise approfondie des processus S&OP et PDP (Plan Directeur de Production)",
                "Gestion des stocks et méthodes de réapprovisionnement (Kanban, MRP2, Point de commande)",
                "Exploitation avancée des ERP (SAP, Microsoft Dynamics) et outils de planification",
                "Gestion d'indicateurs de performance logistique (OTIF, Lead Time, DSI - Days Sales of Inventory)"
            ],
            "human": ["Excellente communication transversale", "Pragmatisme et réactivité face aux imprévus", "Sens du compromis et diplomatie interne", "Capacité d'analyse rigoureuse des données"],
            "tools": ["SAP MM/PP/SD", "Microsoft Dynamics 365 SCM", "Excel expert / Power BI", "Anaplan / O9 Solutions (planification)", "Logiciels de prévision des ventes"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +3 / Licence Pro", "title": "BUT MLT ou Licence Pro Logistique & Supply Chain", "desc": "Bases solides de la logistique industrielle et de la distribution."},
                {"step": "Bac +5 (Master / École)", "title": "Master Spécialisé Supply Chain Management ou Diplôme d'ingénieur", "desc": "Approche globale des systèmes complexes, optimisation mathématique et management international."}
            ],
            "schools": [
                {"name": "ISEL Le Havre (École d'ingénieurs en logistique) — France", "country": "France", "scope": "France"},
                {"name": "Université Paris-Dauphine (Master Management de la Supply Chain) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Industriel) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Polytechnique de Saint-Louis (IPSL / UGB) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["APICS CSCP", "Certification Lean Green Belt", "Certification SCOR-P"]
        },
        "career": {
            "sectors": ["Industrie Manufacturière", "E-commerce & Retail", "Agroalimentaire & Cosmétique", "Chimie & Pharmacie"],
            "employerTypes": ["Entreprises de taille intermédiaire (ETI)", "Grands groupes internationaux", "Prestataires logistiques 3PL"],
            "evolution": ["Directeur Supply Chain", "Directeur d'Usine / Directeur des Opérations", "Directeur des Achats et Approvisionnements"],
            "pros": ["Poste central et très valorisé dans l'entreprise", "Richesse des interactions humaines et techniques", "Excellentes perspectives d'évolution salariale"],
            "cons": ["Gestion permanente de tensions entre production et ventes", "Pics de charge lors des clôtures et inventaires"]
        },
        "gettingStarted": {
            "beginnerProject": "Créer sous tableur un modèle automatisé de gestion des stocks pour une boutique en ligne fictive calculant le stock de sécurité et la date optimale de réapprovisionnement.",
            "steps": [
                "Comprendre la formule de Wilson et les méthodes de calcul du stock de sécurité",
                "Se familiariser avec le cycle S&OP et ses étapes clés",
                "Pratiquer la résolution de cas logistiques (Root Cause Analysis - 5 Pourquoi)"
            ],
            "freeResources": ["Guide pratique du Supply Chain Magazine", "Ressources gratuites de Bretagne Supply Chain", "Tutoriels vidéo sur les modules logistiques SAP"]
        },
        "aiImpact": {
            "summary": "L'IA transforme les prévisions de demande en intégrant des variables externes (météo, tendances réseaux sociaux, inflation) pour anticiper les besoins avec une précision inédite.",
            "positiveImpacts": ["Automatisation des propositions d'approvisionnement", "Détection précoce des anomalies de stock"],
            "risksAndChallenges": ["Perte de visibilité si l'algorithme est utilisé en boîte noire", "Ajustements manuels indispensables lors d'événements atypiques"],
            "recommendedSkills": ["Interprétation des prévisions assistées par Machine Learning", "Gestion collaborative homme-machine"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la structuration des filières agro-industrielles (huileries, laiteries, transformation d'arachide et de mangue) exige des Supply Chain Managers capables de gérer la saisonnalité des récoltes et les contraintes de stockage réfrigéré.",
            "westAfricaOpportunities": "Forte demande chez les distributeurs de produits de grande consommation (FMCG) et les groupes pharmaceutiques approvisionnant la sous-région depuis Dakar.",
            "localChampions": ["Groupe SEDIMA", "Patisen", "La Laiterie du Berger", "SOBOA", "CFAO Consumer Retail Sénégal"]
        },
        "salary": {
            "france": {"entry": 45000, "mid": 60000, "expert": 85000, "currency": "EUR", "period": "an", "note": "Salaire selon taille de l'entreprise et périmètre géographique géré"},
            "senegal": {"entry": 800000, "mid": 1500000, "expert": 2600000, "currency": "FCFA", "period": "mois", "note": "Cadre confirmé dans l'industrie agroalimentaire ou la grande distribution"}
        },
        "connectedFamilies": ["industrie-mecanique", "commerce-marketing", "data-decision"],
        "relatedJobs": ["directeur-supply-chain", "responsable-ordonnancement-planning", "approvisionneur-flux"],
        "sources": [
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Supply Chain Manager", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Fiche métier : Responsable logistique", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/responsable-logistique.html", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un stock immobilisé coûte en moyenne chaque année entre 15% et 25% de sa valeur brute en frais d'entreposage, d'assurance, de dépréciation et de capitaux bloqués.",
            "pourquoi": "Le Supply Chain Manager veille à ce que chaque euro investi en stock tourne le plus rapidement possible.",
            "a_retenir": "Réduire les stocks sans créer de rupture client est le tour de force quotidien du Supply Chain Manager."
        }
    },

    # -----------------------------------------------------------------------
    # 3. RESPONSABLE D'ENTREPÔT
    # -----------------------------------------------------------------------
    {
        "id": "responsable-entrepot",
        "slug": "responsable-entrepot",
        "title": "Responsable d'Entrepôt / Chef de Plateforme Logistique",
        "aliases": ["Warehouse Manager", "Directeur de plateforme logistique", "Chef d'entrepôt"],
        "icon": "🏭",
        "familyId": "transport-logistique",
        "domain": "Gestion d'Entrepôt & Stockage",
        "domainId": "gestion-entrepot-stockage",
        "subdomain": "Management d'entrepôt & Productivité intralogistique",
        "shortDescription": "Gère et optimise l'ensemble des activités d'un entrepôt : réception, stockage, préparation de commandes et expédition des marchandises.",
        "longDescription": "Le Responsable d'entrepôt est le chef d'orchestre opérationnel de la plateforme logistique. Il encadre des dizaines voire des centaines de collaborateurs (caristes, préparateurs, chefs d'équipe). Il veille à la sécurité des biens et des personnes, à la fiabilité des stocks, à la productivité des équipes et à la ponctualité des départs de camions dans le respect des normes d'hygiène et de sécurité.",
        "missions": [
            "Organiser et superviser les flux physiques quotidiens : déchargement, contrôle qualité, rangement en racks, picking et chargement",
            "Manager et animer les équipes opérationnelles (recrutement, formation CACES, plannings, gestion des intérimaires)",
            "Optimiser l'implantation physique des rayonnages (slotting) pour réduire les kilomètres parcourus par les préparateurs",
            "Garantir le respect strict des règles de sécurité (plan de circulation, EPI, consignes incendie, stockage des matières dangereuses)",
            "Piloter les indicateurs de performance clés (taux d'erreur de préparation, coût au colis, productivité horaire)"
        ],
        "workEnvironment": ["Grande plateforme logistique (10 000 à 100 000 m²)", "Entrepôt sec, frais ou surgelé (-25°C)", "Bureau panoramique avec vue sur quai et allées de stockage"],
        "typicalDay": [
            {"time": "06:30", "desc": "Arrivée et briefing du matin avec les chefs d'équipe sur les volumes de commandes et les effectifs présents"},
            {"time": "08:30", "desc": "Tournée de sécurité sur les quais de réception et vérification de l'état des engins de manutention"},
            {"time": "11:00", "desc": "Analyse du WMS sur l'état d'avancement des vagues de préparation pour les départs camions de l'après-midi"},
            {"time": "14:00", "desc": "Entretien avec les agences d'intérim pour calibrer le renfort de personnel en prévision d'une promotion"},
            {"time": "16:30", "desc": "Bilan de la journée avec le directeur d'exploitation : taux de remplissage, productivité et retours colis"}
        ],
        "companyRole": "Garant sur le terrain de la disponibilité physique des marchandises et de la sécurité sans faille du personnel logistique.",
        "skills": {
            "technical": [
                "Maîtrise experte des systèmes de gestion d'entrepôt WMS (Manhattan, Reflex, SAP EWM)",
                "Connaissance des normes d'entreposage ICPE, sécurité incendie et réglementation CACES (R489)",
                "Optimisation spatiale d'entrepôt et méthodes d'implantation (ABC, slotting dynamique)",
                "Gestion d'équipe à fort effectif et législation du travail logistique"
            ],
            "human": ["Leadership opérationnel et présence terrain", "Capacité à fédérer et gérer les conflits", "Sang-froid en période de pic d'activité", "Sens aigu de la sécurité au travail"],
            "tools": ["SAP EWM / Manhattan SCALE", "Reflex WMS / Infolog", "Chariots élévateurs et engins CACES", "Scanners codes-barres / Terminaux radiofréquence", "Systèmes Pick-to-Light / Voice Picking"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / +3 (BTS / Titre Pro)", "title": "BTS GTLA, BUT MLT ou Titre Professionnel Responsable d'Établissement Logistique (REL)", "desc": "Bases de gestion des opérations de quai et management logistique."},
                {"step": "Bac +5 (Optionnel / Évolution)", "title": "Master en Management des Opérations Logistiques", "desc": "Gestion multi-sites et transformation digitale des plateformes."}
            ],
            "schools": [
                {"name": "Centres AFTRAL & Promotrans (Titre Pro REL / Manager Logistique) — France", "country": "France", "scope": "France"},
                {"name": "IUT et Universités de France (BUT MLT, Licences Pro Logistique) — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP de Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Formation Professionnelle aux Métiers Portuaires (CFPMP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CACES R489 (catégories 1A, 3, 5)", "Formation Sauveteur Secouriste du Travail (SST)", "Certification Sécurité ICPE"]
        },
        "career": {
            "sectors": ["Commerce de détail et Grande Distribution", "E-commerce (Amazon, Cdiscount, Jumia)", "Prestataires logistiques 3PL (Geodis, ID Logistics, DHL)", "Industrie Pharmaceutique et Agroalimentaire"],
            "employerTypes": ["Bases logistiques de distributeurs", "Entrepôts de prestataires de transport", "Sites de stockage d'usines"],
            "evolution": ["Directeur de Plateforme Logistique Multi-sites", "Directeur des Opérations Logistiques Régionales", "Directeur de la Relation Transport"],
            "pros": ["Métier très dynamique et concret, aucune monotonie", "Forte demande sur le marché avec l'explosion de l'e-commerce", "Évolution rapide possible depuis le terrain"],
            "cons": ["Horaires décalés fréquents (travail en 2x8 ou 3x8)", "Environnement parfois bruyant et exposé aux températures extrêmes (froid négatif)"]
        },
        "gettingStarted": {
            "beginnerProject": "Simuler l'agencement d'un entrepôt de 1000 m² sous un logiciel 3D (ex: SketchUp) en intégrant les zones de quai réception/expédition, allées de circulation et rayonnages selon la méthode ABC.",
            "steps": [
                "Comprendre le fonctionnement d'un WMS et les flux entrants/sortants",
                "Apprendre les règles fondamentales de sécurité CACES et de prévention des accidents du travail",
                "Observer le fonctionnement d'un centre de distribution lors d'une journée portes ouvertes"
            ],
            "freeResources": ["Vidéos techniques AFTRAL sur le management d'entrepôt", "Guides INRS sur la sécurité dans les entrepôts logistiques", "Fiches pratiques de Bretagne Supply Chain"]
        },
        "aiImpact": {
            "summary": "L'entrepôt devient ultra-automatisé avec les robots mobiles autonomes (AMR), les transtockeurs automatiques et les algorithmes d'optimisation de tournées de picking.",
            "positiveImpacts": ["Réduction de la pénibilité physique grâce aux robots collaboratifs (cobotique)", "Calcul instantané du chemin de picking le plus court"],
            "risksAndChallenges": ["Maintenance complexe des systèmes robotisés", "Nécessité de former les équipes traditionnelles aux nouvelles interfaces digitales"],
            "recommendedSkills": ["Supervision de flottes de robots AMR", "Maintenance de premier niveau des systèmes automatisés (WCS)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la création de la Plateforme Industrielle et Logistique de Diamniadio et l'émergence de hubs logistiques modernes le long de l'autoroute à péage Dakar-Sindia créent un appel d'air massif pour des chefs d'entrepôt qualifiés aux standards internationaux.",
            "westAfricaOpportunities": "Besoin croissant d'entrepôts sous douane (magasins et aires de dédouanement - MAD) et d'entrepôts frigorifiques pour préserver les produits de la pêche et les légumes de la zone des Niayes.",
            "localChampions": ["Bolloré Transport & Logistics / AGL Sénégal", "DP World Logistics Diamniadio", "Maersk Sénégal", "Jumia Sénégal Logistique", "Groupe CCBM"]
        },
        "salary": {
            "france": {"entry": 34000, "mid": 45000, "expert": 65000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres logistiques régionaux"},
            "senegal": {"entry": 500000, "mid": 950000, "expert": 1800000, "currency": "FCFA", "period": "mois", "note": "Selon taille de la plateforme logistique et présence d'installations frigorifiques/automatisées"}
        },
        "connectedFamilies": ["commerce-marketing", "industrie-mecanique"],
        "relatedJobs": ["preparateur-de-commandes", "cariste-entrepot", "chef-de-quai", "gestionnaire-de-stocks"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Responsable d'entrepôt", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/responsable-d-entrepot.html", "type": "metier"},
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Responsable d'entrepôt", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans un entrepôt classique non optimisé, un préparateur de commandes peut marcher jusqu'à 15 à 18 kilomètres par jour rien que pour prélever des articles.",
            "pourquoi": "L'optimisation du 'slotting' (disposer les articles les plus demandés au plus près des quais) permet de diviser par deux ces distances.",
            "a_retenir": "Un responsable d'entrepôt bien formé améliore simultanément la rentabilité de l'entreprise et la santé physique de ses opérateurs."
        }
    },

    # -----------------------------------------------------------------------
    # 4. GESTIONNAIRE DE STOCKS
    # -----------------------------------------------------------------------
    {
        "id": "gestionnaire-de-stocks",
        "slug": "gestionnaire-de-stocks",
        "title": "Gestionnaire de Stocks / Stock & Inventory Controller",
        "aliases": ["Contrôleur d'inventaire", "Gestionnaire d'approvisionnement et stocks", "Responsable gestion des stocks"],
        "icon": "📊",
        "familyId": "transport-logistique",
        "domain": "Gestion d'Entrepôt & Stockage",
        "domainId": "gestion-entrepot-stockage",
        "subdomain": "Contrôle d'inventaire & Exactitude des stocks",
        "shortDescription": "Suit avec précision les mouvements de marchandises, assure la fiabilité des inventaires et évite ruptures et surstocks.",
        "longDescription": "Le Gestionnaire de stocks est le garant de l'exactitude des données de stock entre le système informatique (ERP/WMS) et la réalité physique des rayons. Il planifie les inventaires tournants, analyse les écarts (démarque inconnue, casse, erreurs de saisie), réajuste les paramètres de réapprovisionnement et veille à la rotation optimale des produits selon la règle FIFO/FEFO.",
        "missions": [
            "Contrôler en continu les niveaux de stocks et la conformité des quantités physiques par rapport aux données informatiques",
            "Organiser et superviser les inventaires fiscaux annuels et les inventaires tournants hebdomadaires",
            "Investiguer sur les écarts de stock, identifier les causes racines (vols, erreurs de préparation, casse) et corriger les flux",
            "Optimiser la rotation des marchandises et alerter sur les stocks dormants ou à date limite de consommation (DLC/DLUO)",
            "Paramétrer les seuils d'alerte, stocks de sécurité et quantités de réapprovisionnement dans le logiciel de gestion"
        ],
        "workEnvironment": ["Bureau de gestion dans l'entrepôt ou magasin de stockage", "Allées de stockage avec terminal de comptage radiofréquence", "Environnement industriel, commercial ou hospitalier"],
        "typicalDay": [
            {"time": "08:00", "desc": "Édition du rapport des écarts de stock de la nuit et vérification des réceptions litigieuses"},
            {"time": "09:30", "desc": "Comptage physique en rayon dans le cadre de l'inventaire tournant de la famille 'high-tech'"},
            {"time": "11:30", "desc": "Recherche dans les historiques WMS pour comprendre pourquoi 12 cartons manquent à l'emplacement B-14"},
            {"time": "14:00", "desc": "Point avec le service comptabilité sur la valorisation financière des stocks dépréciés"},
            {"time": "16:00", "desc": "Ajustement des stocks de sécurité sur les références connaissant une hausse soudaine de commandes"}
        ],
        "companyRole": "Garant de l'intégrité financière et opérationnelle des stocks, prévenant à la fois les ruptures préjudiciables et l'immobilisation stérile de capitaux.",
        "skills": {
            "technical": [
                "Maîtrise rigoureuse des méthodes de valorisation des stocks (FIFO, LIFO, PUMP - Prix Unitaire Moyen Pondéré)",
                "Gestion informatisée des stocks sous ERP (SAP MM, SAGE, Odoo) et logiciels WMS",
                "Conduite d'inventaires physiques et analyse statistique des écarts de démarque",
                "Classification ABC des articles et gestion des dates limites (DLC/FEFO)"
            ],
            "human": ["Rigueur et minutie mathématique", "Esprit d'enquête et persévérance", "Sens de l'intégrité et probité professionnelle", "Capacité à collaborer avec les équipes de quai"],
            "tools": ["SAP MM / SAGE X3", "Lecteurs codes-barres / Terminaux RFID", "Excel avancé (tableaux croisés, RECHERCHEX)", "Logiciels de GMAO et WMS"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro / Bac", "title": "Bac Pro Logistique ou Bac Technologique STMG", "desc": "Apprentissage des flux de marchandises et de la tenue des registres de magasinage."},
                {"step": "Bac +2 (BTS / Titre Pro)", "title": "BTS GTLA ou Titre Pro Gestionnaire des Stocks et Approvisionnements", "desc": "Maîtrise des outils ERP, calcul des coûts de possession et gestion des litiges."}
            ],
            "schools": [
                {"name": "Centres AFTRAL & Promotrans — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels et IUT de France — France", "country": "France", "scope": "France"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISEP de Thiès (Filière Logistique et Distribution) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification CACES R489 catégorie 1A/3 (un atout pour vérifier soi-même les racks hauts)", "Certification Excel Expert"]
        },
        "career": {
            "sectors": ["Grande Distribution & E-commerce", "Grossistes et Négoces de matériaux", "Industrie Aéronautique, Automobile et Électronique", "Secteur Hospitalier et Médical"],
            "employerTypes": ["Entrepôts centraux", "Magasins d'usines", "Grandes surfaces de bricolage ou alimentaires", "Centres hospitaliers"],
            "evolution": ["Responsable d'Entrepôt", "Approvisionneur / Acheteur", "Responsable Logistique de Site"],
            "pros": ["Rôle indispensable à la rentabilité économique", "Équilibre parfait entre travail de bureau et inspection terrain", "Très forte employabilité dans tous les secteurs"],
            "cons": ["Pression lors des inventaires fiscaux obligatoires", "Nécessité de justifier chaque écart même minime"]
        },
        "gettingStarted": {
            "beginnerProject": "Tenir le registre d'inventaire complet d'une petite épicerie de quartier ou d'une association sportive sur un tableur avec alertes automatiques lorsque le stock passe sous le seuil minimal.",
            "steps": [
                "Comprendre la différence entre stock théorique et stock réel",
                "Apprendre à calculer le Prix Unitaire Moyen Pondéré (PUMP)",
                "Découvrir la technologie RFID et son apport pour l'automatisation des comptages"
            ],
            "freeResources": ["Tutoriels OpenClassrooms sur la gestion des stocks", "Guides pratiques de l'AFT sur les inventaires", "Simulateur gratuit d'inventaire sous Odoo"]
        },
        "aiImpact": {
            "summary": "Des drones autonomes équipés de caméras et de lecteurs RFID scannent désormais les allées entières la nuit, détectant automatiquement les palettes égarées sans intervention humaine.",
            "positiveImpacts": ["Comptage ultra-rapide des racks de grande hauteur sans nacelle", "Mise à jour en temps réel des stocks informatiques"],
            "risksAndChallenges": ["Investissement technologique important", "Nécessité pour le gestionnaire d'analyser les données plutôt que de compter manuellement"],
            "recommendedSkills": ["Pilotage de solutions de comptage par drone ou caméra fixe IA", "Data analysis des causes de démarque"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maîtrise rigoureuse des stocks est cruciale pour les importateurs de riz, de sucre, de médicaments et de matériaux de construction pour anticiper les délais de dédouanement au Port de Dakar et éviter les ruptures nationales.",
            "westAfricaOpportunities": "Opportunités majeures dans les centrales d'achat pharmaceutiques (PNA - Pharmacie Nationale d'Approvisionnement), les entrepôts de télécoms et les magasins de pièces détachées minières.",
            "localChampions": ["SENAC SA / Eiffage Sénégal (magasin central)", "CFAO Motors Sénégal (stocks pièces détachées)", "PNA (Pharmacie Nationale d'Approvisionnement)", "Auchan Sénégal (entrepôt central Mbao)"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 30000, "expert": 40000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & grilles convention collective transport et logistique"},
            "senegal": {"entry": 220000, "mid": 420000, "expert": 750000, "currency": "FCFA", "period": "mois", "note": "Selon taille du stock géré et secteur d'activité (minier/pharmacie valorisé)"}
        },
        "connectedFamilies": ["finance-fintech", "commerce-marketing"],
        "relatedJobs": ["responsable-entrepot", "approvisionneur-flux", "preparateur-de-commandes"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Gestionnaire de stocks", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/gestionnaire-de-stocks-1.html", "type": "metier"},
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Gestionnaire de stocks", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La démarque inconnue (vols, erreurs administratives, détérioration) représente chaque année près de 1,4% du chiffre d'affaires total de la grande distribution mondiale.",
            "pourquoi": "Un gestionnaire de stocks vigilant est la première ligne de défense de l'entreprise contre ces pertes silencieuses.",
            "a_retenir": "Un stock juste à 99,5% est la clé de voûte de la promesse de livraison client."
        }
    },

    # -----------------------------------------------------------------------
    # 5. PRÉPARATEUR DE COMMANDES
    # -----------------------------------------------------------------------
    {
        "id": "preparateur-de-commandes",
        "slug": "preparateur-de-commandes",
        "title": "Préparateur de Commandes / Magasinier Préparateur",
        "aliases": ["Order Picker", "Agent de préparation logistique", "Opérateur logistique de prélèvement"],
        "icon": "📦",
        "familyId": "transport-logistique",
        "domain": "Manutention, Préparation de Commandes & Conduite d'Engins",
        "domainId": "prepa-commandes-manutention",
        "subdomain": "Prélèvement (picking), colisage & étiquetage",
        "shortDescription": "Rassemble les produits commandés par les clients dans l'entrepôt, contrôle leur conformité et les conditionne pour l'expédition.",
        "longDescription": "Le Préparateur de commandes est un maillon vital de la chaîne de distribution. Guidé par un terminal informatique, un système à commande vocale (Voice Picking) ou lumineux (Pick-to-Light), il parcourt l'entrepôt pour prélever les articles demandés, vérifie leur intégrité, les dispose méthodiquement sur une palette ou dans un colis, puis assure l'emballage et l'étiquetage final avant l'expédition.",
        "missions": [
            "Prélever les articles aux emplacements indiqués par le terminal en respectant les références et quantités exactes",
            "Contrôler visuellement l'état des produits (absence de casse, conformité de l'emballage, respect des dates de péremption)",
            "Monter des palettes stables et équilibrées (filmage étirable manuel ou automatique)",
            "Conditionner les colis pour le transport (calage, fermeture sécurisée, étiquetage code-barres transporteur)",
            "Acheminer les palettes prêtes sur les quais de départ correspondants aux tournées de livraison"
        ],
        "workEnvironment": ["Allées d'un entrepôt logistique", "Zones de picking à température ambiante, frais (+4°C) ou surgelé (-25°C)", "Utilisation continue d'un chariot préparateur de commandes au sol (CACES 1A)"],
        "typicalDay": [
            {"time": "06:00", "desc": "Prise de poste, récupération du casque de guidage vocal ou du pistolet scanner et vérification de la batterie du chariot"},
            {"time": "08:30", "desc": "Exécution d'une première vague de préparation de 45 lignes pour un magasin de centre-ville"},
            {"time": "10:15", "desc": "Pause réglementaire et point sur la cadence horaire avec le chef d'équipe"},
            {"time": "12:00", "desc": "Filmage et étiquetage de 4 palettes complètes acheminées au quai d'expédition n°7"},
            {"time": "13:30", "desc": "Nettoyage de la zone de travail, mise en charge du chariot électrique et fin de poste"}
        ],
        "companyRole": "Garant ultime de la conformité du colis que recevra le client final, au cœur de la satisfaction client et de la rapidité du service.",
        "skills": {
            "technical": [
                "Techniques de prélèvement (picking) et d'équilibrage des charges sur palette",
                "Utilisation des terminaux embarqués, pistolets scanners radiofréquence et voice picking",
                "Conduite d'engins de manutention légers (transpalette électrique, chariot préparateur CACES 1A)",
                "Gestes et postures d'ergonomie et manutention manuelle sécurisée (PRAP)"
            ],
            "human": ["Rapidité d'exécution et dynamisme physique", "Rigueur et concentration pour éviter les erreurs de référence", "Esprit d'équipe et ponctualité", "Résistance au travail en station debout prolongée"],
            "tools": ["Chariot préparateur de commande CACES R489 cat. 1A", "Casque Voice Picking (Vocollect)", "Pistolet scanner radiofréquence (Zebra)", "Banderoleuse de palettes", "Cutters de sécurité"]
        },
        "studies": {
            "pathway": [
                {"step": "Sans diplôme / CAP", "title": "CAP Opérateur Logistique ou Titre Pro Préparateur de Commandes en Entrepôt", "desc": "Apprentissage des règles de sécurité, de constitution de palettes et passage du CACES 1A."},
                {"step": "Bac Pro (Évolution)", "title": "Bac Pro Logistique", "desc": "Approfondissement en gestion des stocks et animation d'équipe."}
            ],
            "schools": [
                {"name": "Centres de formation AFTRAL et Promotrans — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels de France — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle aux Métiers Portuaires (CFPMP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centres de formation professionnelle technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CACES R489 catégorie 1A (chariots préparateurs de commandes au sol)", "Attestation PRAP (Prévention des Risques liés à l'Activité Physique)"]
        },
        "career": {
            "sectors": ["E-commerce & Vente en ligne", "Grande Distribution Alimentaire & Spécialisée", "Logistique Pharmaceutique et Médicale", "Messagerie et Fret Express"],
            "employerTypes": ["Entrepôts d'e-commerce", "Plateformes de distribution de supermarchés", "Prestataires logistiques"],
            "evolution": ["Cariste d'entrepôt (passage CACES 3 et 5)", "Chef d'équipe logistique", "Gestionnaire de stocks ou Responsable de quai"],
            "pros": ["Accès rapide à l'emploi sans diplôme préalable obligatoire", "Primes de productivité fréquentes", "Cadre de travail structuré et possibilité de promotion interne rapide"],
            "cons": ["Pénibilité physique (port de charges répété, marche continue)", "Travail en horaires décalés (équipes du matin, d'après-midi ou de nuit)"]
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à la lecture rapide et sans erreur de codes-barres et références alphanumériques, et suivre une formation aux gestes et postures ergonomiques de soulèvement de charges.",
            "steps": [
                "Obtenir le CACES R489 catégorie 1A (formation de 2 à 3 jours)",
                "Se familiariser avec le vocabulaire de l'entrepôt (picking, packing, slot, SKU)",
                "Effectuer des missions courtes en agence d'intérim logistique pour acquérir de la cadence"
            ],
            "freeResources": ["Vidéos INRS sur l'ergonomie et la manutention de charges", "Simulateurs en ligne de préparation de commandes", "Fiches métiers de Bretagne Supply Chain"]
        },
        "aiImpact": {
            "summary": "L'assistance par intelligence artificielle optimise les chemins de prélèvement pour limiter les pas et intègre la réalité augmentée (lunettes connectées de picking) pour guider le regard de l'opérateur.",
            "positiveImpacts": ["Diminution de la fatigue grâce aux robots suiveurs qui portent les colis", "Suppression quasi-totale des erreurs grâce au contrôle visuel par caméra"],
            "risksAndChallenges": ["Cadences de travail parfois dictées par des algorithmes", "Nécessité de préserver le bien-être physique des opérateurs"],
            "recommendedSkills": ["Interaction avec des robots mobiles collaboratifs", "Utilisation d'interfaces homme-machine modernes"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'essor fulgurant des plateformes d'e-commerce (Jumia, plateformes de livraison locale), des supermarchés modernes (Auchan, Carrefour, Supeco) et des grossistes en quincaillerie à Dakar nécessite des centaines de préparateurs formés au rangement normalisé.",
            "westAfricaOpportunities": "Création d'emplois massive dans les zones logistiques de Diamniadio et de Sandiara pour le conditionnement de produits locaux et manufacturés.",
            "localChampions": ["Auchan Sénégal (base logistique Mbao)", "Jumia Sénégal", "Groupe Patisen (entrepôts produits finis)", "Kirène / SIAGRO"]
        },
        "salary": {
            "france": {"entry": 22000, "mid": 25000, "expert": 30000, "currency": "EUR", "period": "an", "note": "SMIC de base + primes de panier, primes d'équipe et primes de productivité (1800 à 2200 € net/mois avec primes)"},
            "senegal": {"entry": 140000, "mid": 220000, "expert": 350000, "currency": "FCFA", "period": "mois", "note": "Salaires dans les entrepôts modernes de la région de Dakar"}
        },
        "connectedFamilies": ["commerce-marketing"],
        "relatedJobs": ["cariste-entrepot", "responsable-entrepot", "gestionnaire-de-stocks"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Préparateur de commande", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/preparateur-de-commande.html", "type": "metier"},
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Préparateur-rice de commandes", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un bon préparateur de commandes manipule en moyenne entre 100 et 200 colis par heure, représentant parfois plusieurs tonnes de marchandises soulevées par journée de travail.",
            "pourquoi": "C'est pourquoi la bonne application des gestes d'ergonomie (plier les genoux, garder le dos droit) est primordiale pour exercer durablement ce métier.",
            "a_retenir": "Le préparateur de commandes est le bras armé de l'e-commerce moderne."
        }
    },

    # -----------------------------------------------------------------------
    # 6. CARISTE D'ENTREPÔT
    # -----------------------------------------------------------------------
    {
        "id": "cariste-entrepot",
        "slug": "cariste-entrepot",
        "title": "Cariste d'Entrepôt / Conducteur d'Engins de Manutention",
        "aliases": ["Conducteur de chariot élévateur", "Cariste carrousel / frontal / rétractable", "Charioteur"],
        "icon": "🚜",
        "familyId": "transport-logistique",
        "domain": "Manutention, Préparation de Commandes & Conduite d'Engins",
        "domainId": "prepa-commandes-manutention",
        "subdomain": "Gerbage grande hauteur, déchargement & alimentation des lignes",
        "shortDescription": "Conduit des chariots élévateurs pour déplacer, charger, décharger et stocker des palettes jusqu'à plus de 12 mètres de hauteur.",
        "longDescription": "Le Cariste d'entrepôt est le spécialiste du déplacement des charges lourdes sur palettes. Au volant de son chariot élévateur frontal, rétractable ou tridirectionnel, il décharge les semi-remorques à quai, achemine les marchandises dans les allées et les hisse avec une précision millimétrique dans les racks de stockage à grande hauteur. Il alimente également les postes de préparation et charge les camions au départ.",
        "missions": [
            "Décharger et charger les camions et conteneurs maritimes à l'aide de chariots frontaux (CACES 3)",
            "Stocker et déstocker les palettes dans des palettiers jusqu'à 10 ou 12 mètres de haut avec un chariot rétractable (CACES 5)",
            "Vérifier la conformité du chargement, l'état des palettes et signaler les avaries éventuelles",
            "Assurer l'entretien de premier niveau du chariot (vérification des niveaux, batterie électrique, état des fourches)",
            "Circuler en respectant rigoureusement les vitesses limites, priorités et plans de circulation de l'entrepôt"
        ],
        "workEnvironment": ["Entrepôt logistique ou cour extérieure de stockage", "Circulation dans des allées étroites de rayonnage", "Cabine fermée et chauffée en cas d'entrepôt frigorifique (-25°C)"],
        "typicalDay": [
            {"time": "07:00", "desc": "Prise de poste : contrôle visuel des organes de sécurité du chariot (freins, klaxon, mât, gyrophare)"},
            {"time": "08:00", "desc": "Déchargement successif de 3 semi-remorques de matières premières arrivées à quai"},
            {"time": "10:30", "desc": "Opérations de gerbage en grande hauteur (rack niveau 5) au chariot rétractable CACES 5"},
            {"time": "13:00", "desc": "Alimentation des lignes de préparation de commandes en palettes complètes"},
            {"time": "14:30", "desc": "Rangement du chariot sur la zone de recharge électrique et transmission des consignes à l'équipe suivante"}
        ],
        "companyRole": "Pilote des flux lourds de l'entrepôt sans lequel les millions de tonnes de marchandises ne pourraient être ni stockées en hauteur ni expédiées.",
        "skills": {
            "technical": [
                "Maîtrise parfaite de la conduite d'engins CACES R489 (chariots frontaux cat. 3, chariots rétractables cat. 5)",
                "Capacité d'appréciation des distances, de la hauteur et de la charge maximale utile (plaque de charge)",
                "Connaissance des règles de sécurité de gerbage et de répartition des masses",
                "Utilisation des terminaux embarqués sur chariot reliés au WMS"
            ],
            "human": ["Précision du geste et calme olympien", "Vigilance constante et anticipation des mouvements de piétons", "Sens des responsabilités et respect scrupuleux des consignes", "Excellente vision spatiale"],
            "tools": ["Chariot élévateur frontal (CACES 3)", "Chariot à mât rétractable (CACES 5)", "Chariot tridirectionnel", "Terminal embarqué tactile avec lecteur code-barres longue portée", "Batteries lithium-ion et stations de charge"]
        },
        "studies": {
            "pathway": [
                {"step": "Certificat d'Aptitude (CACES)", "title": "CACES R489 catégories 3 et 5", "desc": "Formation théorique et pratique de 3 à 5 jours avec épreuve devant un testeur certifié."},
                {"step": "CAP / Bac Pro (Optionnel)", "title": "CAP Conducteur d'engins ou Bac Pro Logistique", "desc": "Formation complète à la logistique et à l'entretien du matériel."}
            ],
            "schools": [
                {"name": "Centres certifiés AFTRAL, Promotrans et Dekra — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle aux Métiers Portuaires (CFPMP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat d'Aptitude à la Conduite En Sécurité (CACES R489 1A, 3, 5)", "Visite médicale d'aptitude à la conduite d'engins de manutention"]
        },
        "career": {
            "sectors": ["Grande Distribution & Agroalimentaire", "Industrie Chimique, Métallurgique et Automobile", "Manutention Portuaire et Aéroportuaire", "Matériaux de Construction et BTP"],
            "employerTypes": ["Bases logistiques", "Usines de production", "Terminaux portuaires à conteneurs", "Entrepôts de négoce"],
            "evolution": ["Chef d'équipe quai / entrepôt", "Gestionnaire de stocks", "Formateur CACES / Moniteur d'entreprise"],
            "pros": ["Métier qualifié très recherché avec pénurie régulière de profils CACES 5", "Moins fatiguant physiquement que la préparation purement manuelle", "Primes de conduite et d'horaires"],
            "cons": ["Responsabilité très lourde en cas d'accident ou de chute de palette", "Vibrations du chariot sur sol irrégulier", "Exposition au froid dans les entrepôts surgelés"]
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner sur un simulateur de conduite de chariot élévateur et maîtriser parfaitement la lecture d'une plaque de charge (abaque) déterminant le poids maximal soulevable en fonction de la hauteur et du centre de gravité.",
            "steps": [
                "Passer la visite médicale d'aptitude auprès de la médecine du travail",
                "Suivre la formation CACES R489 catégories 3 et 5",
                "Apprendre à effectuer les contrôles de sécurité quotidiens de prise de poste"
            ],
            "freeResources": ["Guide INRS sur la conduite en sécurité des chariots automoteurs", "Tutoriels vidéo AFTRAL sur le passage du CACES 5", "Fiches de sécurité Bretagne Supply Chain"]
        },
        "aiImpact": {
            "summary": "Si certains entrepôts déploient des chariots sans conducteur (AGV), le cariste humain reste irremplaçable pour les opérations complexes, le déchargement de camions hétérogènes et la gestion des aléas.",
            "positiveImpacts": ["Systèmes anticollision laser et caméras IA sur les chariots prévenant les accidents avec les piétons", "Assistance automatique au positionnement des fourches à la bonne hauteur"],
            "risksAndChallenges": ["Nécessité de cohabiter avec des engins autonomes dans les mêmes allées"],
            "recommendedSkills": ["Conduite de chariots intelligents à assistance numérique", "Diagnostic des alertes électroniques de bord"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les caristes sont au cœur de l'activité du Port Autonome de Dakar (terminaux DP World, Bolloré/AGL), de la zone aéroportuaire d'AIBD et des cimenteries (SOCOCIM, Dangote, Ciments du Sahel), où ils manipulent conteneurs, sacs de ciment et marchandises d'import/export.",
            "westAfricaOpportunities": "Forte demande sur les chantiers pétroliers et gaziers offshore (GTA, Sangomar) pour la manutention de tubes et matériels lourds sur les bases logistiques côtières.",
            "localChampions": ["DP World Dakar (Terminal à conteneurs)", "AGL Sénégal (Bolloré)", "SOCOCIM Industries", "Grimaldi Sénégal", "Bolloré Logistics Port"]
        },
        "salary": {
            "france": {"entry": 23000, "mid": 27000, "expert": 33000, "currency": "EUR", "period": "an", "note": "Caristes CACES 5 très recherchés avec primes d'équipe et d'astreinte"},
            "senegal": {"entry": 180000, "mid": 320000, "expert": 550000, "currency": "FCFA", "period": "mois", "note": "Salaires majorés dans le secteur portuaire, pétrolier et industriel lourd"}
        },
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "relatedJobs": ["preparateur-de-commandes", "chef-de-quai", "responsable-entrepot"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Cariste", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/cariste.html", "type": "metier"},
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Cariste", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un chariot élévateur rétractable (CACES 5) peut lever une palette d'une tonne jusqu'à 12 mètres de hauteur, soit l'équivalent d'un immeuble de 4 étages !",
            "pourquoi": "À cette altitude, une déviation de seulement quelques millimètres au sol se traduit par plusieurs dizaines de centimètres en haut du mât.",
            "a_retenir": "Le cariste allie dextérité chirurgicale et concentration totale pour garantir la sécurité de tous."
        }
    },

    # -----------------------------------------------------------------------
    # 7. CHEF DE QUAI
    # -----------------------------------------------------------------------
    {
        "id": "chef-de-quai",
        "slug": "chef-de-quai",
        "title": "Chef de Quai / Superviseur Plateforme de Transit",
        "aliases": ["Responsable de quai de messagerie", "Superviseur de hub de distribution", "Cross-docking Supervisor"],
        "icon": "🚛",
        "familyId": "transport-logistique",
        "domain": "Exploitation & Planification des Transports",
        "domainId": "exploitation-transport",
        "subdomain": "Cross-docking, dispatching de quai & rotations camions",
        "shortDescription": "Supervise les opérations de déchargement, tri et rechargement express des marchandises sur les quais de messagerie.",
        "longDescription": "Le Chef de quai est le maître du temps sur les plateformes de messagerie et de cross-docking où les marchandises ne font que transiter sans être stockées. Il coordonne les équipes d'agents de quai et de caristes pour décharger les camions arrivant de nuit, trier les colis par destination géographique et recharger immédiatement les véhicules de livraison avant les départs matinaux.",
        "missions": [
            "Coordonner les opérations de déchargement, contrôle, ventilation et rechargement en flux tendu (cross-docking)",
            "Affecter les portes de quai aux camions selon l'ordre des tournées et les créneaux horaires stricts",
            "Manager l'équipe d'agents de quai et de caristes (répartition des tâches, sécurité, respect des cadences)",
            "Contrôler le respect des horaires de départ des camions de ligne pour ne pas dégrader le plan de transport",
            "Gérer les litiges immédiats (colis endommagés, palettes manquantes, surcharges) et renseigner le système informatique"
        ],
        "workEnvironment": ["Quai de messagerie ouvert avec portes sectionnelles multiples", "Activité intense principalement en horaires décalés (soirée et nuit de 22h à 06h)", "Bruit des engins, allers-retours constants de camions"],
        "typicalDay": [
            {"time": "21:30", "desc": "Arrivée sur le hub, consultation du planning des arrivées de camions de ligne et briefing des agents"},
            {"time": "23:00", "desc": "Début de la vague massive de déchargement de 15 semi-remorques arrivant des plateformes régionales"},
            {"time": "02:00", "desc": "Supervision du tri automatisé et réorientation manuelle des colis hors gabarit"},
            {"time": "04:30", "desc": "Lancement du chargement des camionnettes de livraison urbaine dans l'ordre inverse des tournées"},
            {"time": "06:00", "desc": "Vérification des derniers départs, transmission des rapports d'anomalies à l'exploitation et fin de service"}
        ],
        "companyRole": "Garant du respect absolu des horaires d'acheminement express des colis entre les lignes longue distance et la livraison finale.",
        "skills": {
            "technical": [
                "Maîtrise des techniques de cross-docking et d'organisation des flux tendus de messagerie",
                "Connaissance des réglementations de transport de marchandises et de calage/arrimage",
                "Utilisation des logiciels de gestion de quai (WMS/TMS) et terminaux de lecture flash",
                "Gestion des priorités sous forte contrainte de temps (deadlines de départ camions)"
            ],
            "human": ["Autorité naturelle et leadership affirmé", "Résistance exceptionnelle au stress et à la fatigue nocturne", "Réactivité et capacité de décision instantanée", "Sens de l'organisation collective"],
            "tools": ["TMS et logiciels de suivi de quai", "Chariots et transpalettes électriques", "Scanners codes-barres haute cadence", "Systèmes de vidéosurveillance de quai et contrôle volumétrique"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro / Titre Pro", "title": "Bac Pro Logistique ou Titre Pro Agent de Quai / Technicien d'Exploitation", "desc": "Expérience de terrain probante sur les opérations de manutention."},
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS GTLA (Gestion des Transports et Logistique Associée) ou BUT MLT", "desc": "Management d'équipe, planification des tournées et droit du transport."}
            ],
            "schools": [
                {"name": "Centres AFTRAL et Promotrans (Titre Pro Technicien Logistique) — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels de transport et logistique de France — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle aux Métiers Portuaires (CFPMP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISEP de Thiès / Diamniadio — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CACES R489 catégorie 1A et 3", "Certification Arrimage et Calage des charges", "Formation Gestion des matières dangereuses (ADR colis)"]
        },
        "career": {
            "sectors": ["Messagerie Express (Chronopost, DHL, FedEx, UPS)", "Transport Routier de Groupage (Geodis, DB Schenker, Dachser)", "Grande Distribution (hubs de cross-docking)", "Fret Aérien et Maritime"],
            "employerTypes": ["Agences de messagerie express", "Hubs de transporteurs routiers", "Terminaux de fret"],
            "evolution": ["Responsable d'Exploitation Transport", "Directeur d'Agence de Transport", "Responsable de Hub Régional"],
            "pros": ["Rôle opérationnel intense au cœur de l'action", "Autonomie décisionnelle forte sur le quai", "Primes de nuit substantielles"],
            "cons": ["Travail quasi-exclusivement de nuit ou en horaires décalés", "Environnement sonore élevé et soumis aux courants d'air"]
        },
        "gettingStarted": {
            "beginnerProject": "Visiter une agence de messagerie express entre 23h et 04h du matin pour observer la synchronisation ultra-rapide des flux de cross-docking et le travail des équipes de quai.",
            "steps": [
                "Travailler comme agent de quai ou cariste pour comprendre les contraintes physiques du chargement",
                "Apprendre les règles de répartition de poids dans une semi-remorque (éviter le surpoids sur l'essieu tracteur)",
                "Développer des compétences d'animation d'équipe et de gestion des priorités temporelles"
            ],
            "freeResources": ["Vidéos métiers de l'AFT sur le rôle de chef de quai", "Guides INRS sur la sécurité des quais de chargement", "Fiches techniques de Bretagne Supply Chain"]
        },
        "aiImpact": {
            "summary": "Des portiques intelligents avec vision par ordinateur scannent les palettes en une fraction de seconde lors de leur passage sur le quai, calculant automatiquement volume, poids et conformité.",
            "positiveImpacts": ["Détection instantanée des erreurs de chargement de porte", "Optimisation algorithmique du plan de chargement des camions"],
            "risksAndChallenges": ["Le chef de quai doit arbitrer en quelques secondes les alertes remontées par l'IA sans bloquer le flux"],
            "recommendedSkills": ["Supervision des lignes de tri automatisé", "Utilisation des systèmes de détection volumétrique IA"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les chefs de quai sont essentiels sur les plateformes de groupage de Dakar pour trier les cargaisons destinées aux régions de l'intérieur (Thiès, Touba, Kaolack, Saint-Louis, Ziguinchor) et pour les départs des camions du corridor Dakar-Bamako.",
            "westAfricaOpportunities": "Forte expansion liée au développement du commerce transfrontalier et à l'implantation de nouvelles agences de transport express international dans la sous-région.",
            "localChampions": ["DHL Express Sénégal", "Bolloré / AGL Messagerie", "Chronopost / DPD Sénégal", "Sociétés de transport interurbain (Dakar Dem Dikk Express, Al Azhar Transport)"]
        },
        "salary": {
            "france": {"entry": 28000, "mid": 35000, "expert": 45000, "currency": "EUR", "period": "an", "note": "Hors primes de nuit et de panier qui augmentent significativement le net perçu"},
            "senegal": {"entry": 350000, "mid": 600000, "expert": 1100000, "currency": "FCFA", "period": "mois", "note": "Responsable de quai sur hub de messagerie ou terminal conteneurs"}
        },
        "connectedFamilies": ["commerce-marketing", "industrie-mecanique"],
        "relatedJobs": ["conducteur-routier-marchandises", "responsable-exploitation-transport", "cariste-entrepot"],
        "sources": [
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Chef-fe de quai", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers du secteur transport et logistique", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique.html", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur un quai de messagerie moderne, une palette ne reste en moyenne que 15 à 45 minutes entre le moment où elle est déchargée d'un camion régional et rechargée dans un autre camion de livraison.",
            "pourquoi": "Ce principe de 'cross-docking' permet d'éliminer les frais d'entreposage et de garantir une livraison le lendemain matin partout dans le pays.",
            "a_retenir": "Le chef de quai est le garant du flux continu qui fait battre le cœur de la livraison express."
        }
    },

    # -----------------------------------------------------------------------
    # 8. CONDUCTEUR ROUTIER DE MARCHANDISES
    # -----------------------------------------------------------------------
    {
        "id": "conducteur-routier-marchandises",
        "slug": "conducteur-routier-marchandises",
        "title": "Conducteur Routier de Marchandises / Chauffeur Poids Lourd",
        "aliases": ["Chauffeur routier", "Conducteur grand routier longue distance", "Conducteur de semi-remorque"],
        "icon": "🚛",
        "familyId": "transport-logistique",
        "domain": "Transport Routier de Marchandises & Longue Distance",
        "domainId": "transport-routier-marchandises",
        "subdomain": "Transport régional, national & international de fret",
        "shortDescription": "Achemine des marchandises au volant d'un véhicule poids lourd ou semi-remorque en veillant à la sécurité du fret et aux délais.",
        "longDescription": "Le Conducteur routier de marchandises transporte au quotidien des dizaines de tonnes de denrées alimentaires, produits manufacturés, carburants ou matériaux industriels. Seul maître à bord de son camion de 44 tonnes, il gère son itinéraire, respecte scrupuleusement la réglementation sociale européenne sur les temps de conduite et de repos, veille à l'arrimage de sa cargaison et représente son entreprise lors de la livraison chez les clients.",
        "missions": [
            "Conduire un ensemble routier (porteur, tracteur avec semi-remorque) sur des trajets régionaux, nationaux ou internationaux",
            "Superviser les opérations de chargement, d'arrimage et de calage des marchandises pour garantir la stabilité du véhicule",
            "Tenir à jour les documents de transport (lettre de voiture nationale, CMR internationale, bordereaux de livraison)",
            "Respecter rigoureusement la réglementation (chronotachygraphe, temps de pause obligatoires de 45 minutes toutes les 4h30)",
            "Effectuer les contrôles quotidiens de sécurité du véhicule (pression des pneus, freins, éclairage, niveaux)"
        ],
        "workEnvironment": ["Cabine moderne et équipée (couchette, réfrigérateur, GPS poids lourd)", "Réseau autoroutier, routes nationales et zones industrielles", "Découchés fréquents pour les conducteurs 'grand routier'"],
        "typicalDay": [
            {"time": "05:30", "desc": "Insertion de la carte conducteur dans le chronotachygraphe numérique et tour du véhicule pour les vérifications"},
            {"time": "06:00", "desc": "Départ pour une première liaison de 350 km vers une plateforme de distribution logistique"},
            {"time": "10:15", "desc": "Pause obligatoire de 45 minutes sur une aire de repos autoroutière"},
            {"time": "11:00", "desc": "Reprise de la route et arrivée chez le client : mise à quai précise et émargement de la lettre de voiture"},
            {"time": "15:00", "desc": "Rechargement d'un fret de retour organisé par l'affréteur et route vers le point de stationnement de nuit"}
        ],
        "companyRole": "Pilote indispensable de l'économie réelle assurant l'acheminement effectif de près de 90% des marchandises terrestres.",
        "skills": {
            "technical": [
                "Maîtrise experte de la conduite de véhicules lourds (permis C et EC) en toutes conditions météo",
                "Connaissance parfaite de la réglementation des transports routiers (RSE) et utilisation du chronotachygraphe",
                "Techniques d'arrimage sécurisé des charges (norme EN 12195) et répartition des masses",
                "Éco-conduite préventive permettant d'économiser carburant et pneumatiques"
            ],
            "human": ["Autonomie et sens aigu des responsabilités", "Vigilance et réflexes routiers irréprochables", "Patience et ponctualité", "Bonne condition physique et hygiène de vie"],
            "tools": ["Ensemble routier 44 tonnes (Scania, Volvo, Renault Trucks, Mercedes-Benz)", "Chronotachygraphe numérique", "GPS poids lourd intégrant hauteurs de ponts et restrictions de tonnage", "Sangles d'arrimage et barres de calage"]
        },
        "studies": {
            "pathway": [
                {"step": "Permis & FIMO", "title": "Permis C (Poids lourd) / EC (Super lourd) + FIMO Marchandises", "desc": "Formation Initiale Minimale Obligatoire (140h) indispensable pour conduire professionnellement."},
                {"step": "Diplôme d'État", "title": "CAP Conducteur Routier Marchandises ou Titre Pro Conducteur du Transport Routier", "desc": "Permet d'obtenir les permis C, EC et la qualification professionnelle dès 18 ans."}
            ],
            "schools": [
                {"name": "Centres de formation AFTRAL, Promotrans et ECF — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels des métiers des transports — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle aux Métiers des Transports Routiers (CFPT Cambérène / Thiès) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Auto-écoles professionnelles poids lourds agréées — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Permis C et EC", "FIMO (Formation Initiale Minimale Obligatoire) et FCO (renouvelable tous les 5 ans)", "Certificat ADR (transport de matières dangereuses)"]
        },
        "career": {
            "sectors": ["Entreprises de Transport Routier de Fret (TFT)", "Grande Distribution et Agroalimentaire", "Industrie Pétrolière et Chimique (citernes)", "BTP et Matériaux (bennes, toupies)"],
            "employerTypes": ["Transporteurs routiers nationaux et internationaux", "Flottes propres d'industriels ou de distributeurs", "Artisans transporteurs"],
            "evolution": ["Conducteur de convoi exceptionnel ou de matières dangereuses", "Moniteur d'entreprise / Formateur éco-conduite", "Exploitant transport ou Affréteur en agence", "Création de son entreprise de transport (avec capacité)"],
            "pros": ["Sentiment d'indépendance et de liberté sur la route", "Recrutement massif permanent (pénurie de conducteurs en Europe et en Afrique)", "Cabines modernes ultra-confortables"],
            "cons": ["Éloignement du domicile pour les conducteurs longue distance (découchés)", "Pression des horaires de livraison et aléas du trafic"]
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner sur un simulateur de conduite de poids lourd (ex: Euro Truck Simulator 2 avec volant à retour de force) pour appréhender les trajectoires avec remorque, les angles morts et les manœuvres à quai.",
            "steps": [
                "Obtenir le permis B et vérifier son aptitude médicale",
                "Intégrer une formation Titre Pro Conducteur Routier ou CAP conducteur",
                "Se former aux règles d'éco-conduite pour optimiser sa consommation de gazole"
            ],
            "freeResources": ["Vidéos officielles de l'AFT sur le quotidien des conducteurs routiers", "Guides de sécurité routière professionnelle", "Tutoriels sur l'utilisation du tachygraphe numérique"]
        },
        "aiImpact": {
            "summary": "Les camions intègrent désormais des régulateurs de vitesse prédictifs par GPS et des systèmes de freinage d'urgence autonome par caméra IA, réduisant drastiquement le risque d'accident.",
            "positiveImpacts": ["Assistance à la conduite prévenant l'endormissement et le franchissement de ligne", "Optimisation continue des trajets évitant les embouteillages"],
            "risksAndChallenges": ["Arrivée progressive de convois en peloton automatisé (platooning) sur autoroute"],
            "recommendedSkills": ["Maîtrise des systèmes télématiques embarqués", "Gestion de l'éco-conduite assistée par IA"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les conducteurs routiers jouent un rôle géostratégique capital sur le corridor Dakar-Bamako (plus de 1000 km), assurant l'approvisionnement vital du Mali en hydrocarbures, ciment et marchandises conteneurisées depuis le Port de Dakar.",
            "westAfricaOpportunities": "Besoin urgent de conducteurs formés aux normes de sécurité modernes pour réduire l'accidentalité sur les axes transfrontaliers (Mali, Mauritanie, Gambie, Guinée).",
            "localChampions": ["Union des Transporteurs Routiers du Sénégal", "Transrail / GCO Logistics", "CFAO Logistics Sénégal", "Sociétés de transport d'hydrocarbures (TotalEnergies, Vivo Energy)"]
        },
        "salary": {
            "france": {"entry": 26000, "mid": 33000, "expert": 42000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant. Salaires bruts hors indemnités de déplacement et de repas (net perçu : 2200 à 3200 €/mois en grand routier)"},
            "senegal": {"entry": 200000, "mid": 380000, "expert": 650000, "currency": "FCFA", "period": "mois", "note": "Salaires de base + primes de voyage substantielles sur les corridors internationaux (Dakar-Bamako)"}
        },
        "connectedFamilies": ["industrie-mecanique", "commerce-marketing"],
        "relatedJobs": ["conducteur-livreur-urbain", "responsable-exploitation-transport", "gestionnaire-de-flotte"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Conducteur routier", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/conducteur-routier.html", "type": "metier"},
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Conducteur-rice routier-ère de marchandises", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En Europe comme en Afrique de l'Ouest, plus de 88% de l'ensemble des marchandises consommées quotidiennement par la population voyagent à un moment donné à bord d'un camion.",
            "pourquoi": "Sans conducteurs routiers, les supermarchés, les usines, les pharmacies et les stations-service seraient totalement vides en moins de 72 heures.",
            "a_retenir": "Le conducteur routier est le pilier indispensable qui fait tourner l'économie réelle."
        }
    },

    # -----------------------------------------------------------------------
    # 9. CONDUCTEUR-LIVREUR URBAIN
    # -----------------------------------------------------------------------
    {
        "id": "conducteur-livreur-urbain",
        "slug": "conducteur-livreur-urbain",
        "title": "Conducteur-Livreur Urbain / Livreur Messagerie Dernier Kilomètre",
        "aliases": ["Chauffeur livreur", "Livreur express", "Agent de livraison urbaine"],
        "icon": "🚐",
        "familyId": "transport-logistique",
        "domain": "Transport Urbain, Messagerie & Livraison Dernier Kilomètre",
        "domainId": "transport-urbain-livraison",
        "subdomain": "Livraison du dernier kilomètre, éco-mobilité & colisage",
        "shortDescription": "Assure la livraison rapide de colis, plis et marchandises aux entreprises et particuliers en milieu urbain et périurbain.",
        "longDescription": "Le Conducteur-livreur urbain est le visage final du commerce connecté. Au volant d'un utilitaire léger (fourgonnette électrique ou thermique) ou d'un vélo-cargo, il prend en charge une tournée de 50 à 120 points d'arrêt par jour. Il charge méthodiquement son véhicule dans l'ordre de son itinéraire, navigue dans le trafic citadin, livre en main propre contre signature numérique et gère les retours de marchandises.",
        "missions": [
            "Charger son véhicule utilitaire en organisant les colis selon l'ordre chronologique de la tournée de livraison",
            "Assurer la distribution des colis auprès des destinataires (entreprises, commerces, particuliers) dans les délais impartis",
            "Faire signer les bordereaux de livraison électroniques sur terminal portable (PDA/smartphone)",
            "Gérer les encaissements en cas de livraison contre remboursement et collecter les colis de retour",
            "Adopter une conduite souple, sécuritaire et respectueuse des piétons, cyclistes et règles de stationnement urbain"
        ],
        "workEnvironment": ["Véhicule utilitaire léger (< 3,5 tonnes) ou vélo-cargo électrique", "Milieu urbain dense, rues commerçantes et résidences", "Contacts humains constants avec les clients"],
        "typicalDay": [
            {"time": "06:45", "desc": "Arrivée à l'agence de messagerie, vérification de la feuille de route sur le terminal PDA"},
            {"time": "07:15", "desc": "Chargement méthodique de 75 colis dans le fourgon selon le plan de tournée GPS"},
            {"time": "08:30", "desc": "Première livraison chez les professionnels et commerçants du centre-ville avant ouverture"},
            {"time": "12:30", "desc": "Pause déjeuner après avoir effectué 45 livraisons"},
            {"time": "13:30", "desc": "Deuxième partie de tournée chez les particuliers et enlèvement de colis chez des expéditeurs"},
            {"time": "16:00", "desc": "Retour à l'agence, déchargement des colis non distribués et clôture de la tournée sur le système"}
        ],
        "companyRole": "Ambassadeur de la marque auprès du client final, concrétisant la promesse de livraison du commerce omnicanal.",
        "skills": {
            "technical": [
                "Maîtrise de la conduite urbaine d'utilitaires légers et manœuvres de stationnement délicates",
                "Sens de l'orientation et utilisation des applications de guidage de tournées (GPS intelligent)",
                "Respect des règles de calage et de préservation des colis fragiles",
                "Utilisation des terminaux PDA de scannage et de signature électronique"
            ],
            "human": ["Excellent sens du contact client et amabilité", "Bonne condition physique et rapidité de déplacement", "Gestion du stress face aux embouteillages", "Honnêteté et sens de la ponctualité"],
            "tools": ["Véhicule utilitaire léger (Renault Master, Peugeot Boxer, utilitaires électriques)", "Terminal de livraison PDA (Zebra)", "Diable de manutention pliant", "Applications de navigation dynamique (Waze, tournées logistiques dédiées)"]
        },
        "studies": {
            "pathway": [
                {"step": "Permis B", "title": "Permis B (véhicules légers de moins de 3,5 tonnes)", "desc": "Indispensable pour conduire les camionnettes de livraison urbaine."},
                {"step": "Formation Professionnelle", "title": "CAP Livreur ou Titre Professionnel Conducteur Livreur sur Véhicule Utilitaire Léger (CLVUL)", "desc": "Formation de 3 mois axée sur la gestion de tournée, l'éco-conduite et la relation client."}
            ],
            "schools": [
                {"name": "Centres AFTRAL et Promotrans (Titre Pro CLVUL) — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels de France — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation aux métiers du transport urbain — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Auto-écoles professionnelles de Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Permis de conduire B", "Attestation de formation aux premiers secours", "Formation à l'éco-conduite urbaine"]
        },
        "career": {
            "sectors": ["Messagerie Express (Chronopost, DPD, GLS, Colissimo)", "E-commerce et Livraison de repas / courses à domicile", "Distribution pharmaceutique aux officines", "Grossistes de pièces détachées automobiles"],
            "employerTypes": ["Entreprises de transport express", "Plateformes de livraison du dernier kilomètre", "Sous-traitants de messagerie"],
            "evolution": ["Chef d'équipe livreurs", "Dispatcheur / Agent d'exploitation urbaine", "Conducteur poids lourd (après passage permis C)", "Création d'une entreprise de livraison sous-traitante"],
            "pros": ["Métier accessible avec un simple permis B", "Autonomie durant toute la journée de tournée", "Journées rythmées avec retour au domicile chaque soir"],
            "cons": ["Difficultés récurrentes de circulation et de stationnement en ville", "Rythme de travail soutenu avec nombre de stops élevé"]
        },
        "gettingStarted": {
            "beginnerProject": "Optimiser sur une carte de sa ville le trajet de distribution de 20 adresses aléatoires pour trouver l'itinéraire le plus fluide sans demi-tours inutiles.",
            "steps": [
                "Avoir son permis B avec tous ses points et une conduite sans reproche",
                "Se former à l'utilisation d'outils d'optimisation d'itinéraires",
                "Postuler auprès d'agences de messagerie express pour des remplacements estivaux ou de fin d'année"
            ],
            "freeResources": ["Vidéos de l'AFT sur le métier de conducteur-livreur", "Guides pratiques sur la logistique urbaine durable", "Conseils d'éco-conduite pour véhicules utilitaires"]
        },
        "aiImpact": {
            "summary": "Des algorithmes de routage dynamique recalculent en direct l'ordre optimal des livraisons en fonction du trafic, de la météo et des créneaux de présence confirmés par les clients.",
            "positiveImpacts": ["Réduction des kilomètres inutiles et du temps passé dans les bouchons", "Notification automatique du client à l'approche du livreur"],
            "risksAndChallenges": ["Cadences parfois trop serrées calculées par les algorithmes"],
            "recommendedSkills": ["Interaction fluide avec les assistants de navigation IA", "Gestion proactive de la relation client numérique"]
        },
        "africaContext": {
            "senegalInsight": "À Dakar, l'explosion du commerce électronique, des livraisons de repas et des courses à domicile a transformé le métier de livreur urbain en un secteur d'emploi majeur, opérant en camionnettes, scooters ou motos pour contourner les embouteillages de la presqu'île.",
            "westAfricaOpportunities": "Besoin croissant de professionnalisation des livreurs pour fiabiliser le paiement à la livraison (Cash on Delivery) et la géolocalisation dans des zones sans adresses postales formelles.",
            "localChampions": ["Yassir Express Sénégal", "Paps Logistics (spécialiste du dernier kilomètre)", "Chronopost Sénégal", "Jumia Express", "Tiak Tiak (livraison urbaine rapide)"]
        },
        "salary": {
            "france": {"entry": 22000, "mid": 25000, "expert": 30000, "currency": "EUR", "period": "an", "note": "SMIC de base + primes de qualité de livraison et paniers repas (1600 à 2000 € net/mois)"},
            "senegal": {"entry": 120000, "mid": 200000, "expert": 350000, "currency": "FCFA", "period": "mois", "note": "Salaires de livreurs de messagerie formelle à Dakar + primes par course"}
        },
        "connectedFamilies": ["commerce-marketing"],
        "relatedJobs": ["conducteur-routier-marchandises", "responsable-exploitation-transport", "chauffeur-vtc-transport-personnes"],
        "sources": [
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Conducteur-rice livreur-euse", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Fiche métier : Livreur", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique.html", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le 'dernier kilomètre' représente à lui seul plus de 20% du coût total de la chaîne logistique et près de 25% des émissions de gaz à effet de serre du transport de marchandises.",
            "pourquoi": "C'est la partie la plus fragmentée et la plus complexe à optimiser de toute la supply chain.",
            "a_retenir": "Le conducteur-livreur urbain est l'artisan quotidien de la décarbonation des villes grâce aux flottes électriques."
        }
    },

    # -----------------------------------------------------------------------
    # 10. CONDUCTEUR DE TRAIN
    # -----------------------------------------------------------------------
    {
        "id": "conducteur-de-train",
        "slug": "conducteur-de-train",
        "title": "Conducteur de Train / Pilote Ferroviaire Fret & Voyageurs",
        "aliases": ["Conducteur de ligne SNCF", "Mécanicien de locomotive", "Pilote de train à grande vitesse / fret"],
        "icon": "🚆",
        "familyId": "transport-logistique",
        "domain": "Transport Ferroviaire & Conduite de Trains",
        "domainId": "transport-ferroviaire",
        "subdomain": "Conduite de ligne, sécurité ferroviaire & fret",
        "shortDescription": "Conduit des trains de voyageurs (TER, TGV) ou de fret lourd sur le réseau ferré en appliquant une réglementation de sécurité draconienne.",
        "longDescription": "Le Conducteur de train transporte des centaines de voyageurs ou des milliers de tonnes de marchandises à travers le pays. Seul dans sa cabine de conduite, il gère la vitesse de son convoi, anticipe les distances de freinage considérables (plusieurs centaines de mètres), observe rigoureusement la signalisation lumineuse ferroviaire et communique en permanence avec les régulateurs de ligne et aiguilleurs pour garantir une sécurité absolue.",
        "missions": [
            "Conduire des rames de voyageurs (Transilien, TER, TGV) ou des convois de fret lourd en respectant les horaires et limitations de vitesse",
            "Réaliser les contrôles de sécurité avant départ (essais de frein, vérification des attelages et des systèmes de bord)",
            "Observer et interpréter instantanément la signalisation ferroviaire latérale et en cabine (KVB, ERTMS)",
            "Adapter sa conduite pour optimiser la consommation électrique et assurer le confort des voyageurs",
            "Appliquer les procédures d'urgence immédiates en cas d'obstacle sur la voie, de panne technique ou de signal d'alarme"
        ],
        "workEnvironment": ["Cabine de conduite de locomotive ou de rame automotrice", "Réseau ferré national et lignes à grande vitesse", "Horaires décalés incluant nuits, week-ends et jours fériés avec découchés"],
        "typicalDay": [
            {"time": "05:15", "desc": "Prise de service au dépôt ferroviaire, consultation des bulletins d'information sur l'état de la ligne"},
            {"time": "05:45", "desc": "Revue de la locomotive, mise sous tension et réalisation des essais de continuité de freinage"},
            {"time": "06:15", "desc": "Mise à quai du premier train de voyageurs du matin et départ à la seconde précise fixée par la feuille de marche"},
            {"time": "09:30", "desc": "Arrivée au terminus, relève par un collègue et debriefing des éventuels dysfonctionnements de signalisation"},
            {"time": "12:00", "desc": "Repos réglementaire obligatoire en foyer ferroviaire avant la mission retour de fin d'après-midi"}
        ],
        "companyRole": "Garant ultime de la vie de centaines de passagers et de l'acheminement sécurisé des convois de fret massifiés sur le réseau ferré.",
        "skills": {
            "technical": [
                "Maîtrise approfondie des règlements généraux de sécurité ferroviaire (RGS)",
                "Connaissance technique des engins moteurs (systèmes de traction électrique/diesel, frein pneumatique)",
                "Interprétation des systèmes de signalisation et de contrôle de vitesse (ERTMS, KVB, TVM)",
                "Maîtrise des procédures de dépannage rapide et d'isolement de circuits défaillants"
            ],
            "human": ["Sang-froid et rigueur absolue dans l'application des consignes", "Vigilance constante et excellente capacité de concentration solitaire", "Sens aigu de la ponctualité", "Stabilité émotionnelle face aux situations d'urgence"],
            "tools": ["Cabines de conduite de trains (Alstom, Siemens, Bombardier)", "Système de contrôle de vitesse KVB / ERTMS", "Radio sol-train et téléphonie de sécurité GSM-R", "Valise de dépannage ferroviaire"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac à Bac +2", "title": "Bac scientifique, technique (STI2D, Pro MELEC) ou Bac +2", "desc": "Niveau requis pour postuler aux sélections rigoureuses des opérateurs ferroviaires."},
                {"step": "Formation Interne Rémunérée", "title": "Licence Européenne de Conducteur de Train", "desc": "Formation théorique et pratique de 9 à 12 mois au sein d'un centre agréé (SNCF, Euro Cargo Rail, etc.)."}
            ],
            "schools": [
                {"name": "Centres de formation SNCF Réseau / Voyageurs — France", "country": "France", "scope": "France"},
                {"name": "Écoles de conduite ferroviaire privées agréées EPSF — France", "country": "France", "scope": "France"},
                {"name": "Centre de formation de la SETER (Train Express Régional de Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar - Filières Génie Mécanique/Électrique) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Licence Européenne de Conduite de Train (certifiée par l'EPSF)", "Attestation d'aptitude physique et psychologique obligatoire (décret ferroviaire)"]
        },
        "career": {
            "sectors": ["Transport de Voyageurs (SNCF Voyageurs, RATP, Trenitalia, Renfe, Transdev)", "Fret Ferroviaire (Fret SNCF, DB Cargo, Captrain, Lineas)", "Réseaux Ferroviaires Urbains et Métros"],
            "employerTypes": ["Compagnies ferroviaires nationales et privées", "Entreprises de travaux ferroviaires"],
            "evolution": ["Conducteur de Ligne TGV", "Conducteur-moniteur / Formateur de conducteurs", "Régulateur au centre opérationnel de gestion des circulations (COGC)", "Cadre de traction"],
            "pros": ["Rémunération attractive avec nombreuses primes de traction et d'horaires", "Sécurité de l'emploi dans les grandes compagnies", "Fierté de piloter des machines de grande puissance pour la transition écologique"],
            "cons": ["Horaires très contraignants et variables (travail de nuit, dimanches, jours de fête)", "Découchés réguliers loin du domicile familial"]
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner sur un simulateur ferroviaire professionnel (ex: Train Sim World ou OpenRails) pour appréhender la courbe de freinage d'un convoi de 1500 tonnes et la réaction aux signaux d'avertissement.",
            "steps": [
                "Vérifier son aptitude médicale et sa vision des couleurs (test d'Ishihara)",
                "Préparer les tests psychotechniques et psychomoteurs d'entrée en formation ferroviaire",
                "Comprendre le fonctionnement du frein automatique Westinghouse"
            ],
            "freeResources": ["Vidéos officielles SNCF Recrutement sur les étapes de sélection", "Fiches techniques EPSF sur la sécurité ferroviaire", "Guides de l'AFT sur le transport multimodal"]
        },
        "aiImpact": {
            "summary": "L'automatisation progresse avec le pilotage automatique sous supervision humaine (ATO over ETCS) qui optimise la vitesse et le freinage pour économiser jusqu'à 15% d'énergie.",
            "positiveImpacts": ["Assistance active évitant tout franchissement de signal fermé", "Régulation automatique de l'allure pour s'insérer parfaitement dans le trafic"],
            "risksAndChallenges": ["Maintien de la vigilance du conducteur lorsque les automatismes gèrent la vitesse"],
            "recommendedSkills": ["Supervision des systèmes de conduite automatique de niveau GoA2", "Gestion des bascules en mode manuel dégradé"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la mise en service du TER de Dakar (SETER / SNT) reliant Dakar à Diamniadio puis à l'aéroport AIBD a suscité un engouement exceptionnel et formé la première génération sénégalaise de conducteurs et conductrices de trains modernes à grande fréquence.",
            "westAfricaOpportunities": "Relance des lignes ferroviaires de fret lourd régionales (chemin de fer Dakar-Bamako, transport minier des phosphates et du zircon par GCO).",
            "localChampions": ["SETER (Société d'Exploitation du Train Express Régional de Dakar)", "SNT (Société Nationale des Chemins de Fer du Sénégal)", "Grands Trains du Sénégal (GTS SA)", "Grande Côte Opérations (GCO Logistics ferroviaire)"]
        },
        "salary": {
            "france": {"entry": 28000, "mid": 38000, "expert": 55000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant. Salaire de base complété par les primes de traction et de déplacement (net perçu : 2200 à 3800 €/mois)"},
            "senegal": {"entry": 400000, "mid": 750000, "expert": 1300000, "currency": "FCFA", "period": "mois", "note": "Conducteurs qualifiés sur le réseau TER de Dakar et lignes ferroviaires industrielles"}
        },
        "connectedFamilies": ["industrie-mecanique", "energie-renouvelable"],
        "relatedJobs": ["conducteur-routier-marchandises", "responsable-exploitation-transport"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Conducteur de train", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/conducteur-de-train_2.html", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Témoignage : Contrôleuse de train", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/controleuse-de-train-le-temoignage-de-ilham-apprentie.html", "type": "article"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": False,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un train de fret moyen de 1 000 tonnes remplace à lui seul environ 45 à 50 camions semi-remorques sur les autoroutes, émettant jusqu'à 9 fois moins de CO2.",
            "pourquoi": "L'acier sur l'acier offre un coefficient de frottement minimal, permettant de déplacer des masses colossales avec un rendement énergétique inégalé.",
            "a_retenir": "Le conducteur de train est un acteur central de la décarbonation massive des transports terrestres."
        }
    },

    # -----------------------------------------------------------------------
    # 11. OFFICIER DE LA MARINE MARCHANDE
    # -----------------------------------------------------------------------
    {
        "id": "officier-marine-marchande",
        "slug": "officier-marine-marchande",
        "title": "Officier de la Marine Marchande / Capitaine & Lieutenant de Navigation",
        "aliases": ["Capitaine au long cours", "Officier pont", "Lieutenant de navigation maritime", "Second capitaine"],
        "icon": "⚓",
        "familyId": "transport-logistique",
        "domain": "Transport Maritime & Gestion Portuaire",
        "domainId": "transport-maritime-portuaire",
        "subdomain": "Navigation hauturière, passerelle & commandement de navire",
        "shortDescription": "Conduit et commande les navires de commerce (porte-conteneurs, pétroliers, vraquiers, ferries) sur tous les océans du globe.",
        "longDescription": "L'Officier de la marine marchande est le garant de la sécurité de l'équipage, du navire et de milliers de conteneurs ou cargaisons précieuses en haute mer. Sur la passerelle de commandement, il assure les quarts de navigation, veille au cap, surveille le radar anticollision (ARPA), analyse les prévisions météo et supervise les manœuvres délicates d'entrée et de sortie des ports mondiaux aux côtés des pilotes maritimes.",
        "missions": [
            "Assurer les quarts de navigation de 4 heures à la passerelle (veille visuelle, radar, carte électronique ECDIS)",
            "Calculer et ajuster les routes maritimes en fonction des courants, des tempêtes et des zones de piraterie",
            "Superviser les opérations de chargement, d'arrimage et de stabilité du navire (calcul de gîte et de ballastage)",
            "Gérer la sécurité à bord (exercices incendie, abandon du navire, sauvetage en mer, sûreté code ISPS)",
            "Assurer le commandement de l'équipage international et gérer les formalités administratives d'escale"
        ],
        "workEnvironment": ["Passerelle de commandement ultra-moderne de grands navires de commerce", "Haute mer sur tous les océans du monde", "Embarquements de plusieurs semaines ou mois suivis de périodes équivalentes de congés complets"],
        "typicalDay": [
            {"time": "03:45", "desc": "Montée à la passerelle pour la relève de quart de 04h00 : point sur la météo, le cap et les cibles radar"},
            {"time": "06:00", "desc": "Observation du lever du soleil et recalage de la position sur la carte électronique ECDIS"},
            {"time": "08:00", "desc": "Fin du quart de navigation, petit-déjeuner et inspection de l'arrimage des conteneurs sur le pontée"},
            {"time": "11:00", "desc": "Calcul de stabilité du navire en prévision de l'escale portuaire du lendemain (transfert de ballasts d'eau)"},
            {"time": "15:45", "desc": "Préparation du deuxième quart de passerelle (16h00 - 20h00) avec surveillance accrue dans un détroit resserré"}
        ],
        "companyRole": "Commandant et protecteur d'un mastodonte des mers transportant des centaines de millions d'euros de marchandises à travers les océans.",
        "skills": {
            "technical": [
                "Navigation maritime hauturière, astronomique et électronique (systèmes ECDIS, GPS différentiel)",
                "Manoeuvre des grands navires et règles de barre pour prévenir les abordages en mer (RIPAM)",
                "Calculs de stabilité des navires, résistance des matériaux marins et ballastage",
                "Réglementation maritime internationale (conventions SOLAS, MARPOL, STCW, code ISPS)"
            ],
            "human": ["Leadership d'exception et autorité naturelle", "Calme absolu et sang-froid dans la tempête", "Sens aigu des responsabilités humaines et matérielles", "Capacité à vivre en communauté restreinte et multiculturelle"],
            "tools": ["Cartes électroniques ECDIS", "Radars ARPA anticollision", "Système d'identification automatique AIS", "Pilote automatique adaptatif et gouvernail", "GMDSS (communications de détresse par satellite)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Scientifique", "title": "Bac Général (Maths, Physique) ou Bac STI2D", "desc": "Solides bases scientifiques indispensables pour réussir le concours d'entrée."},
                {"step": "Grande École Maritime", "title": "Diplôme d'Ingénieur Naviguant / Officier de 1ère classe de la Marine Marchande (DESMM)", "desc": "Cursus de 5 ans à l'ENSM (École Nationale Supérieure Maritime) formant les officiers pont et machine polyvalents."}
            ],
            "schools": [
                {"name": "ENSM (École Nationale Supérieure Maritime - Le Havre, Marseille, Saint-Malo, Nantes) — France", "country": "France", "scope": "France"},
                {"name": "École Navale / Formations maritimes civiles — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle aux Métiers Portuaires (CFPMP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Académie Régionale des Sciences et Techniques de la Mer (ARSTM Abidjan) — Côte d'Ivoire / Régional", "country": "Côte d'Ivoire", "scope": "Afrique de l'Ouest"}
            ],
            "certifications": ["Brevets d'Officier STCW (Chef de quart, Second capitaine, Capitaine illimité)", "Certificat général d'opérateur GMDSS (radiocommunications maritimes)", "Certificats de formation médicale et de sauvetage en mer"]
        },
        "career": {
            "sectors": ["Armements de Porte-conteneurs (CMA CGM, Maersk, MSC)", "Transport d'Hydrocarbures et Méthaniers (TotalEnergies Marine, Gazocéan)", "Compagnies de Ferries et Croisières", "Offshore Pétrolier et Éolien en Mer"],
            "employerTypes": ["Grands armateurs mondiaux", "Compagnies maritimes de remorquage", "Bateaux de recherche océanographique"],
            "evolution": ["Capitaine de Navire / Commandant", "Pilote Maritime de Port (sur concours très sélectif)", "Officier de Sécurité Maritime ou Inspecteur des Affaires Maritimes", "Directeur d'Armement à terre"],
            "pros": ["Rémunération de très haut niveau nette d'impôts sous certains pavillons", "Rythme de travail atypique (par exemple 2 mois à bord / 2 mois de congés rémunérés)", "Aventure marine et découverte du monde entier"],
            "cons": ["Éloignement familial prolongé durant les embarquements", "Conditions de mer parfois très dures (tempêtes, mers fortes)", "Isolement en mer"]
        },
        "gettingStarted": {
            "beginnerProject": "Apprendre à tracer une route maritime sur une carte marine papier du SHOM en appliquant la déclinaison magnétique et la dérive due au vent et aux courants.",
            "steps": [
                "Valider son aptitude médicale auprès d'un médecin des gens de mer",
                "Préparer le concours d'entrée à l'ENSM ou à l'ARSTM d'Abidjan",
                "Passer le permis côtier et hauturier pour s'initier aux manœuvres de barre"
            ],
            "freeResources": ["Publications officielles du SHOM et de l'Organisation Maritime Internationale (OMI)", "Simulateurs maritimes en ligne (Bridge Command)", "Fiches de l'ENSM sur la carrière d'officier"]
        },
        "aiImpact": {
            "summary": "Des systèmes de routage météorologique par intelligence artificielle recalculent la route optimale toutes les heures, réduisant de 10% la consommation de carburant et évitant les zones de tempêtes dangereuses.",
            "positiveImpacts": ["Assistance à la détection d'obstacles flottants par caméras thermiques IA", "Optimisation de l'accostage assisté par capteurs laser"],
            "risksAndChallenges": ["Cybersécurité des navires ultra-connectés face aux piratages de systèmes de navigation"],
            "recommendedSkills": ["Cyber-résilience des systèmes de bord", "Supervision de la navigation assistée par IA"]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est une nation maritime par excellence. Avec plus de 700 km de côtes et le Port Autonome de Dakar, porte d'entrée de l'Afrique de l'Ouest, les officiers de marine sénégalais naviguent sur les lignes internationales et jouent un rôle clé dans le pilotage portuaire dakarois et les nouvelles dessertes maritimes vers la Casamance (ferries Aline Sitoé Diatta).",
            "westAfricaOpportunities": "Rôle déterminant dans la sécurisation du Golfe de Guinée et le développement des flottes de soutien logistique offshore (champs pétroliers et gaziers Sangomar et GTA).",
            "localChampions": ["Port Autonome de Dakar (service de pilotage)", "COSAMA (Consortium Sénégalais d'Activités Maritimes)", "Bolloré / AGL Sénégal Maritime", "Chantier Naval Dakar Marine"]
        },
        "salary": {
            "france": {"entry": 38000, "mid": 65000, "expert": 110000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & armateurs de France. Un commandant au long cours gagne plus de 7 000 à 10 000 € net/mois."},
            "senegal": {"entry": 900000, "mid": 1800000, "expert": 3500000, "currency": "FCFA", "period": "mois", "note": "Officiers naviguant sur les flottes internationales ou pilotes du Port de Dakar"}
        },
        "connectedFamilies": ["peche-maritime", "droit-management", "industrie-mecanique"],
        "relatedJobs": ["agent-maritime-consignataire", "declarant-en-douane", "pilote-de-ligne"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Officier de la marine marchande", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique/officier-de-la-marine-marchande.html", "type": "metier"},
            {"organization": "Bretagne Supply Chain", "title": "Les métiers de la supply chain et du transport", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": False,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 90% du commerce mondial en volume est acheminé par la mer sur environ 50 000 navires de commerce sillonnant les océans en permanence.",
            "pourquoi": "Un porte-conteneurs géant moderne peut transporter jusqu'à 24 000 conteneurs, soit l'équivalent d'une file ininterrompue de camions de plus de 140 kilomètres de long !",
            "a_retenir": "L'officier de marine marchande est le timonier discret de la mondialisation."
        }
    },

    # -----------------------------------------------------------------------
    # 12. AGENT MARITIME / CONSIGNATAIRE DE NAVIRE
    # -----------------------------------------------------------------------
    {
        "id": "agent-maritime-consignataire",
        "slug": "agent-maritime-consignataire",
        "title": "Agent Maritime / Consignataire de Navires",
        "aliases": ["Shipping Agent", "Consignataire de cargaison", "Représentant de l'armateur"],
        "icon": "🚢",
        "familyId": "transport-logistique",
        "domain": "Transport Maritime & Gestion Portuaire",
        "domainId": "transport-maritime-portuaire",
        "subdomain": "Consignation portuaire, avitaillement & accueil escale",
        "shortDescription": "Représente l'armateur dans le port et organise l'ensemble des besoins administratifs, techniques et humains lors de l'escale d'un navire.",
        "longDescription": "L'Agent maritime est le représentant légal et logistique de l'armateur à terre. Dès qu'un navire s'annonce au large, il planifie son accueil : réservation du quai, commande du pilote maritime, des remorqueurs et des lamaneurs, formalités douanières et sanitaires, avitaillement en vivres et carburant (bunkering), relève d'équipage et réparation technique. Il veille à ce que l'escale dure le moins longtemps possible pour minimiser les coûts portuaires.",
        "missions": [
            "Préparer l'escale du navire en amont avec la capitainerie du port et les autorités maritimes",
            "Coordonner les intervenants nautiques : pilotage, remorquage, lamanage pour l'accostage et l'appareillage",
            "Superviser les formalités administratives, sanitaires, douanières et de police d'immigration pour l'équipage",
            "Organiser l'avitaillement du navire (fioul lourd, eau douce, vivres de bord, pièces de rechange)",
            "Établir les comptes d'escale détaillés (disbursement accounts) refacturés à l'armateur étranger"
        ],
        "workEnvironment": ["Bureau en zone portuaire avec vue sur les terminaux", "Déplacements constants à bord des navires à quai ou au mouillage", "Disponibilité 24h/24 et 7j/7 calquée sur les mouvements des navires"],
        "typicalDay": [
            {"time": "06:30", "desc": "Appel radio avec le capitaine d'un cargo en approche pour confirmer l'heure exacte d'embarquement du pilote"},
            {"time": "08:00", "desc": "Présence à quai lors de l'accostage du navire et montée à bord pour recueillir les documents officiels du capitaine"},
            {"time": "10:30", "desc": "Dépôt des manifestes de cargaison auprès de la douane portuaire et formalités de visa pour 3 marins en relève"},
            {"time": "14:00", "desc": "Coordination avec le fournisseur de carburant marin pour le soutage (bunkering) de 800 tonnes de fioul"},
            {"time": "17:30", "desc": "Clôture du dossier de départ, signature de la lettre de décharge et commande des remorqueurs pour l'appareillage de 21h"}
        ],
        "companyRole": "Représentant absolu de l'armateur à terre qui fait le lien entre le monde de la mer et les institutions terrestres pour une escale fluide et sans retard.",
        "skills": {
            "technical": [
                "Connaissance approfondie des procédures portuaires et maritimes internationales",
                "Droit maritime, contrats d'affrètement (charte-partie) et responsabilité civile de l'armateur",
                "Maîtrise de l'anglais maritime opérationnel (SMCP - Standard Marine Communication Phrases)",
                "Gestion comptable des frais d'escale et de droits de port"
            ],
            "human": ["Réactivité extrême et disponibilité permanente", "Aisance relationnelle avec des interlocuteurs de toutes nationalités", "Capacité de négociation et de persuasion", "Rigueur administrative sans faille"],
            "tools": ["Logiciels de gestion portuaire (Port Community Systems - PCS)", "VHF maritime", "Systèmes de suivi de navires en temps réel (MarineTraffic, VesselFinder)", "Logiciels d'émission de manifestes de fret"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 (BTS)", "title": "BTS GTLA ou BTS Commerce International", "desc": "Bases du transport international et des incoterms maritimes."},
                {"step": "Bac +3 à +5 (Licence Pro / Master)", "title": "Licence Pro ou Master en Management Portuaire et Maritime", "desc": "Approfondissement en droit maritime, gestion de terminaux et consignation."}
            ],
            "schools": [
                {"name": "Université du Havre / Université d'Aix-Marseille (Droit et Économie Maritime) — France", "country": "France", "scope": "France"},
                {"name": "École de Management de Normandie (MSc Supply Chain & Maritime) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle aux Métiers Portuaires (CFPMP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Cheikh Anta Diop (UCAD Dakar - FSJP / Master Droit Maritime) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification d'Agent Maritime agréé", "Certification ISPS de sûreté portuaire"]
        },
        "career": {
            "sectors": ["Agences Maritimes Indépendantes", "Filiales d'Armements Maritimes Mondiaux (CMA CGM, Maersk, MSC, Hapag-Lloyd)", "Manutentionnaires et Opérateurs de Terminaux Portuaires"],
            "employerTypes": ["Agences de consignation portuaire", "Grands groupes maritimes", "Sociétés de courtage maritime"],
            "evolution": ["Responsable d'Agence Maritime", "Directeur d'Opérations Portuaires", "Courtier Maritime (Shipbroker) ou Affréteur maritime"],
            "pros": ["Métier cosmopolite au contact direct des marins du monde entier", "Rôle central dans la vie économique du port", "Chaque escale est unique"],
            "cons": ["Astreintes de nuit, week-ends et jours fériés très fréquentes", "Pression temporelle intense (un navire bloqué à quai coûte des dizaines de milliers de dollars par jour)"]
        },
        "gettingStarted": {
            "beginnerProject": "Suivre l'escale complète d'un navire porte-conteneurs sur un port donné grâce à MarineTraffic et lister l'ensemble des acteurs intervenant entre son mouillage et son appareillage.",
            "steps": [
                "Perfectionner son anglais oral et écrit jusqu'à un niveau courant",
                "Comprendre le fonctionnement d'une charte-partie et le rôle d'un connaissement maritime (Bill of Lading)",
                "Effectuer un stage dans une agence de consignation sur un grand port de commerce"
            ],
            "freeResources": ["Publications de la Fédération des Agents Maritimes de France (FASBA)", "Rapports d'activité des grands ports autonomes", "Guides de Bretagne Supply Chain sur les métiers maritimes"]
        },
        "aiImpact": {
            "summary": "Les plateformes intelligentes de Port Community Systems automatisent le partage des données entre douanes, capitainerie et agent maritime, permettant de réserver les services nautiques avant même que le navire n'arrive en rade.",
            "positiveImpacts": ["Réduction drastique des temps d'attente au mouillage (Just-In-Time Arrivals)", "Automatisation des déclarations douanières et manifestes électroniques"],
            "risksAndChallenges": ["La dimension humaine et la gestion des imprévus d'équipage restent totalement manuelles"],
            "recommendedSkills": ["Utilisation experte des plateformes PCS portuaires", "Gestion des flux de données dématérialisés"]
        },
        "africaContext": {
            "senegalInsight": "Au Port Autonome de Dakar, hub maritime majeur d'Afrique de l'Ouest accueillant plus de 3000 navires par an, les agents maritimes sont indispensables pour assurer les escales rapides des porte-conteneurs, chalutiers hauturiers et navires miniers.",
            "westAfricaOpportunities": "Rôle accru avec le développement des terminaux pétroliers et méthaniers du projet Grand Tortue Ahmeyim (GTA) à la frontière sénégalo-mauritanienne.",
            "localChampions": ["Bolloré / AGL Sénégal Maritime", "CMA CGM Sénégal", "Maersk Line Sénégal", "Grimaldi Sénégal", "Consortium Maritime Sénégalais"]
        },
        "salary": {
            "france": {"entry": 27000, "mid": 38000, "expert": 52000, "currency": "EUR", "period": "an", "note": "Selon expérience et taille de l'agence portuaire (primes d'escale fréquentes)"},
            "senegal": {"entry": 350000, "mid": 700000, "expert": 1400000, "currency": "FCFA", "period": "mois", "note": "Cadre d'agence maritime internationale au Port de Dakar"}
        },
        "connectedFamilies": ["peche-maritime", "commerce-marketing"],
        "relatedJobs": ["officier-marine-marchande", "declarant-en-douane", "agent-de-transit-international"],
        "sources": [
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Agent-e maritime", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers du secteur transport et logistique", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique.html", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Chaque jour de retard d'un grand porte-conteneurs bloqué au mouillage peut coûter entre 30 000 et 80 000 dollars de frais d'immobilisation (surestaries) à l'armateur.",
            "pourquoi": "L'agent maritime est donc soumis à une pression permanente pour accélérer chaque formalité d'entrée et de sortie.",
            "a_retenir": "L'agent maritime est l'ange gardien indispensable du navire de passage en terre étrangère."
        }
    },

    # -----------------------------------------------------------------------
    # 13. PILOTE DE LIGNE
    # -----------------------------------------------------------------------
    {
        "id": "pilote-de-ligne",
        "slug": "pilote-de-ligne",
        "title": "Pilote de Ligne / Commandant de Bord Aviation Civile",
        "aliases": ["Commandant de bord", "Copilote / Premier officier pilote de ligne (OPL)", "Airline Pilot"],
        "icon": "✈️",
        "familyId": "transport-logistique",
        "domain": "Transport Aérien, Aviation Civile & Opérations de Vol",
        "domainId": "transport-aerien-aviation",
        "subdomain": "Pilotage commercial, navigation aérienne & sécurité des vols",
        "shortDescription": "Pilote des avions de ligne pour transporter passagers ou fret à travers le monde en appliquant les normes de sécurité aérienne les plus strictes.",
        "longDescription": "Le Pilote de ligne est le responsable ultime de la conduite de l'aéronef et de la vie des centaines de passagers à bord. En binôme dans le cockpit (Commandant de bord et Copilote), il prépare le plan de vol, calcule le carburant nécessaire, effectue la visite pré-vol extérieure, décolle, gère la navigation en haute altitude en lien avec le contrôle aérien et pose l'avion en toute sécurité quelles que soient les conditions météo.",
        "missions": [
            "Préparer minutieusement le vol (analyse des conditions météo, vents d'altitude, calcul du devis de masse et carburant)",
            "Effectuer l'inspection pré-vol extérieure de l'avion et vérifier tous les systèmes du cockpit",
            "Piloter l'aéronef lors des phases de décollage, montée, croisière, descente et atterrissage",
            "Communiquer rigoureusement en phraséologie aéronautique anglaise avec les contrôleurs aériens",
            "Gérer avec un sang-froid absolu les pannes de systèmes de bord, orages et situations d'urgence médicale ou technique"
        ],
        "workEnvironment": ["Cockpit pressurisé et ultra-technologique d'un avion de ligne moderne (Airbus, Boeing)", "Aéroports internationaux et hôtels d'escale partout dans le monde", "Horaires décalés et passages fréquents de fuseaux horaires (décalage horaire)"],
        "typicalDay": [
            {"time": "06:00", "desc": "Arrivée en salle des opérations de vol : briefing avec le copilote sur la météo de la route, les NOTAM et le carburant"},
            {"time": "06:45", "desc": "Briefing de l'équipage commercial (PNC - stewards et hôtesses) sur la durée de vol et les turbulences prévues"},
            {"time": "07:15", "desc": "Tour de l'avion sous l'aile pour vérifier réacteurs, trains d'atterrissage et surfaces mobiles"},
            {"time": "07:50", "desc": "Repoussage, allumage des moteurs, roulage vers la piste et décollage pour 7 heures de vol transatlantique"},
            {"time": "15:00", "desc": "Atterrissage en douceur à destination, coupure des moteurs, debriefing technique et route vers l'hôtel d'escale"}
        ],
        "companyRole": "Maître absolu à bord et garant juridique suprême de la sécurité de l'aéronef, de ses passagers et de son équipage.",
        "skills": {
            "technical": [
                "Pilotage aux instruments (IFR) et gestion des automatismes de bord (FMS, Fly-by-Wire)",
                "Aérodynamique, météorologie aéronautique avancée et mécanique du vol",
                "Gestion des ressources de l'équipage dans le cockpit (CRM - Crew Resource Management)",
                "Maîtrise bilingue de l'anglais aéronautique OACI (niveau 4 minimum, niveau 5 ou 6 recommandé)"
            ],
            "human": ["Sang-froid exemplaire et capacité de prise de décision sous pression", "Leadership participatif et écoute active", "Rigueur méthodologique et discipline absolue", "Excellente santé physique et acuité sensorielle"],
            "tools": ["Cockpits Glass Cockpit Airbus A320/A350 ou Boeing 737/777/787", "Simulateurs de vol Full Flight niveau D sur vérins", "EFB (Electronic Flight Bag - tablettes cockpit Jeppesen)", "Radars météo Doppler embarqués"]
        },
        "studies": {
            "pathway": [
                {"step": "Filière d'État (Excellence)", "title": "Concours ENAC Pilote de Ligne (Élève Pilote de Ligne - EPL)", "desc": "Formation gratuite et rémunérée très sélective accessible après classes préparatoires scientifiques (CPGE)."},
                {"step": "Filière Privée / Cadets", "title": "Programmes Cadets de compagnies (Air France, etc.) ou écoles privées (ATPL intégré)", "desc": "Formation modulaire ou intégrée de 2 ans en ATO (Air Transport Operator) avec obtention de l'ATPL théorique et pratique."}
            ],
            "schools": [
                {"name": "ENAC (École Nationale de l'Aviation Civile - Toulouse) — France", "country": "France", "scope": "France"},
                {"name": "Filière Cadets Air France — France", "country": "France", "scope": "France"},
                {"name": "Institut Africain des Métiers de l'Aérien (IAMA) — Régional Afrique de l'Ouest", "country": "Sénégal / Mali", "scope": "Afrique de l'Ouest"},
                {"name": "Écoles de pilotage privées agréées ANACIM — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Licence de Pilote de Ligne (ATPL - Airline Transport Pilot Licence)", "Qualification de Type (QT) sur l'avion opéré (ex: A320, B737)", "Certificat médical d'aptitude de Classe 1 (renouvelé chaque année)"]
        },
        "career": {
            "sectors": ["Compagnies Aériennes Régionales et Nationales", "Compagnies Aériennes Long-Courrier Mondiales", "Compagnies de Fret Aérien (FedEx, DHL, Cargolux)", "Aviation d'Affaires et Gouvernementale"],
            "employerTypes": ["Compagnies régulières", "Compagnies low-cost", "Transporteurs cargo"],
            "evolution": ["Copilote (Officier Pilote de Ligne)", "Commandant de bord (après environ 5 à 8 ans et 3000 à 5000 heures de vol)", "Pilote instructeur (TRI/TRE) ou Pilote d'essai", "Directeur des Opérations Aériennes de la compagnie"],
            "pros": ["Métier passion d'un prestige immense", "Rémunération parmi les plus élevées du secteur transport", "Découverte continue du monde et vue incomparable depuis le bureau le plus haut du monde"],
            "cons": ["Décalage horaire permanent et fatigue circadienne", "Examens médicaux et contrôles en simulateur tous les 6 mois remettant la licence en jeu", "Investissement financier lourd pour les filières privées"]
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer un vol d'initiation en aéroclub sur avion léger (ex: Robin DR400 ou Cessna 172) avec un instructeur pour vivre ses premières sensations aux commandes.",
            "steps": [
                "Passer la visite médicale aéronautique Classe 1 pour vérifier son aptitude physiologique",
                "Obtenir le BIA (Brevet d'Initiation Aéronautique) au lycée",
                "Pratiquer le vol simulé avec radiotéléphonie réaliste sur le réseau virtuel IVAO ou VATSIM"
            ],
            "freeResources": ["Annales gratuites du concours EPL de l'ENAC", "Guides de la DGAC sur la formation des pilotes", "Publications de sécurité de l'EASA et de l'OACI"]
        },
        "aiImpact": {
            "summary": "Bien que les avions soient hautement automatisés, l'IA assiste les pilotes en calculant les profils de descente parfaits et en détectant les micro-anomalies mécaniques avant qu'elles ne deviennent critiques.",
            "positiveImpacts": ["Systèmes de prévention des collisions au sol et en l'air (TCAS)", "Assistance au pilotage réduisant la charge mentale dans les phases d'atterrissage par mauvaise visibilité"],
            "risksAndChallenges": ["Débat éthique et technique mondial sur les futurs vols avec un seul pilote à bord (Single Pilot Operations)"],
            "recommendedSkills": ["Maintien de l'excellence du pilotage manuel brut", "Gestion de la résilience système homme-machine"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le hub aéroportuaire moderne de l'Aéroport International Blaise Diagne (AIBD) et le développement de la compagnie nationale Air Sénégal ont recréé une dynamique majeure pour former de jeunes pilotes sénégalais sur flotte moderne (Airbus A330neo, A321, A319, ATR 72-600).",
            "westAfricaOpportunities": "Forte demande de commandants de bord qualifiés dans toute la zone UEMOA et CEDEAO pour connecter les capitales ouest-africaines sans passer par l'Europe.",
            "localChampions": ["Air Sénégal SA", "Transair Sénégal", "ANACIM (Agence Nationale de l'Aviation Civile et de la Météorologie)", "Arc en Ciel Aviation"]
        },
        "salary": {
            "france": {"entry": 45000, "mid": 95000, "expert": 190000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant. Débute autour de 3 500 € brut/mois en copilote régional, dépasse 12 000 à 18 000 €/mois en commandant de bord long-courrier."},
            "senegal": {"entry": 1800000, "mid": 3500000, "expert": 7500000, "currency": "FCFA", "period": "mois", "note": "Grilles des compagnies régionales et internationales opérant depuis Dakar"}
        },
        "connectedFamilies": ["sciences-biotech", "industrie-mecanique"],
        "relatedJobs": ["controleur-aerien", "personnel-navigant-commercial-pnc", "chef-escale-aeroportuaire"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Pilote de ligne", "url": "https://www.letudiant.fr/metiers/secteur/aeronautique-et-espace/pilote-de-ligne.html", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers du secteur transport et logistique", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique.html", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": False,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans l'aviation commerciale moderne, le pilote ne touche physiquement les commandes manuelles en moyenne que 3 à 7 minutes par vol (principalement lors de la rotation au décollage et du touché des roues).",
            "pourquoi": "Tout le reste du vol est orchestré par le pilote automatique sous la surveillance continue et méticuleuse de l'équipage.",
            "a_retenir": "Le pilote de ligne est avant tout un gestionnaire de systèmes complexes et un décideur de crise hors pair."
        }
    },

    # -----------------------------------------------------------------------
    # 14. CONTRÔLEUR AÉRIEN
    # -----------------------------------------------------------------------
    {
        "id": "controleur-aerien",
        "slug": "controleur-aerien",
        "title": "Contrôleur Aérien / Aiguilleur du Ciel & Ingénieur de la Navigation",
        "aliases": ["Ingénieur du contrôle de la navigation aérienne (ICNA)", "Air Traffic Controller (ATCO)", "Aiguilleur du ciel"],
        "icon": "📡",
        "familyId": "transport-logistique",
        "domain": "Gestion Aéroportuaire & Contrôle Aérien",
        "domainId": "navigation-aerienne-aeroport",
        "subdomain": "Contrôle en tour, approche & centre en route de la navigation aérienne",
        "shortDescription": "Guide et sépare les avions au sol et en plein ciel pour éviter les collisions et fluidifier le trafic aérien.",
        "longDescription": "Le Contrôleur aérien est le garant de la fluidité et de la sécurité des milliers d'avions qui traversent l'espace aérien à chaque instant. Installé dans la vigie de la tour de contrôle d'un aéroport ou devant les écrans radar géants d'un centre de contrôle en route (CRNA), il donne des instructions précises de cap, d'altitude et de vitesse aux pilotes, gère les atterrissages et décollages et s'assure qu'une distance de sécurité absolue sépare toujours deux aéronefs.",
        "missions": [
            "Assurer la séparation réglementaire entre tous les aéronefs en vol et au sol (séparation radar et verticale)",
            "Donner les autorisations d'atterrissage, de décollage et de traversée de pistes depuis la tour de contrôle",
            "Guider les avions en phase d'approche vers les pistes d'atterrissage par tous les temps (procédures ILS)",
            "Optimiser les trajectoires pour réduire les temps de vol, les attentes en l'air et la consommation de carburant",
            "Gérer avec un calme absolu les urgences en vol (pannes moteur, dépressurisations, déroutements météo)"
        ],
        "workEnvironment": ["Vigie vitrée au sommet d'une tour de contrôle avec vue panoramique sur les pistes", "Salle radar tamisée d'un Centre Régional de la Navigation Aérienne (CRNA)", "Casque radio et liaison continue avec les pilotes en anglais aéronautique"],
        "typicalDay": [
            {"time": "06:45", "desc": "Prise de quart au centre de contrôle en route : point météo, vents de jet et restrictions d'espace aérien"},
            {"time": "07:15", "desc": "Installation sur le secteur de contrôle radar 'Est' : prise en charge simultanée de 18 avions en croisière"},
            {"time": "08:30", "desc": "Gestion d'un conflit d'altitude entre deux gros-porteurs par attribution d'un changement de cap immédiat de 15°"},
            {"time": "09:15", "desc": "Pause obligatoire de récupération cognitive (temps de pause strict toutes les 2 heures)"},
            {"time": "10:00", "desc": "Passage sur la position d'approche : séquençage à la minute près des arrivées sur les pistes parallèles"},
            {"time": "13:00", "desc": "Fin du quart de contrôle et debriefing des pointes de trafic avec le chef de salle"}
        ],
        "companyRole": "Cerveau invisible du ciel garantissant qu'aucun avion ne croise dangereusement la route d'un autre.",
        "skills": {
            "technical": [
                "Maîtrise absolue des règlements de la circulation aérienne (RCA) et procédures OACI",
                "Lecture et interprétation instantanée des écrans radar (plots primaires, secondaires, étiquettes de vol)",
                "Calcul mental ultra-rapide de vitesses de rapprochement, taux de descente et angles d'interception",
                "Anglais aéronautique fluide et standardisé parlé sous stress"
            ],
            "human": ["Vision tridimensionnelle exceptionnelle et projection mentale dans le temps", "Résistance hors norme au stress et concentration sans faille", "Réactivité et rapidité de décision sans la moindre hésitation", "Esprit d'équipe et confiance mutuelle avec son binôme de secteur"],
            "tools": ["Systèmes de traitement radar (Eurocat, Cofiroute)", "Radars secondaires de surveillance monopulse et ADS-B", "Consoles radio VHF avec sélection de fréquences sol-air", "Bandes de progression de vol électroniques (Electronic Strips)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 Scientifique", "title": "Classes préparatoires scientifiques (CPGE) ou BUT scientifique", "desc": "Niveau requis pour présenter le concours très sélectif d'Ingénieur du Contrôle de la Navigation Aérienne."},
                {"step": "Grande École d'État (3 ans)", "title": "Diplôme ICNA de l'ENAC (Ingénieur du Contrôle de la Navigation Aérienne)", "desc": "Formation de 3 ans rémunérée à l'ENAC combinant cours théoriques, simulateurs radar 360° et stages en centres opérationnels."}
            ],
            "schools": [
                {"name": "ENAC (École Nationale de l'Aviation Civile - Toulouse) — France", "country": "France", "scope": "France"},
                {"name": "EAMAC (École Africaine de la Météorologie et de l'Aviation Civile - Niamey / ASECNA) — Régional Afrique", "country": "Niger / Régional", "scope": "Afrique de l'Ouest"},
                {"name": "Centre de formation de l'ASECNA (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Licence européenne de contrôleur de la circulation aérienne (ATCL)", "Qualifications de mention d'unité sur l'aéroport ou le centre d'affectation", "Certificat médical d'aptitude de Classe 3 (renouvelé chaque année)"]
        },
        "career": {
            "sectors": ["Aviation Civile d'État (DGAC - Direction des Services de la Navigation Aérienne en France)", "Organismes multinationaux de contrôle (ASECNA en Afrique, Eurocontrol en Europe)", "Bases Aériennes Militaires (Armée de l'Air)"],
            "employerTypes": ["DGAC / DSNA", "ASECNA", "Eurocontrol", "Forces armées"],
            "evolution": ["Chef de secteur / Chef de salle de contrôle", "Instructeur sur simulateur radar", "Chef de la circulation aérienne d'un aéroport international", "Expert international auprès de l'OACI"],
            "pros": ["Rémunération d'excellence parmi les plus attractives de la fonction publique", "Temps de travail aménagé avec pauses de récupération obligatoires", "Rôle palpitant d'une utilité vitale directe"],
            "cons": ["Niveau de stress et de concentration maximal où aucune erreur n'est tolérée", "Travail en horaires décalés 24h/24, nuits et jours fériés", "Concours d'entrée extrêmement sélectif"]
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner sur un simulateur de contrôle aérien (ex: Endless ATC ou OpenScope) pour comprendre la difficulté de gérer simultanément 12 avions arrivant sous des angles et vitesses différents.",
            "steps": [
                "Travailler son niveau d'anglais général et scientifique",
                "Développer sa capacité de calcul mental rapide et de vision dans l'espace 3D",
                "Visiter la tour de contrôle d'un aéroport lors des journées du patrimoine ou sur demande pédagogique"
            ],
            "freeResources": ["Annales gratuites du concours ICNA de l'ENAC", "Documentation officielle de l'ASECNA", "Vidéos de la DGAC sur les coulisses de la navigation aérienne"]
        },
        "aiImpact": {
            "summary": "Des outils d'intelligence artificielle détectent automatiquement les conflits de trajectoire jusqu'à 20 minutes à l'avance et proposent des altitudes optimales pour désengorger le trafic.",
            "positiveImpacts": ["Alerte précoce sur les risques de rapprochement (Safety Nets)", "Optimisation des flux aériens à l'échelle d'un continent entier"],
            "risksAndChallenges": ["Le contrôleur humain conserve la responsabilité juridique exclusive de chaque ordre donné"],
            "recommendedSkills": ["Supervision des outils d'aide à la décision algorithmique", "Gestion des pannes de systèmes automatisés"]
        },
        "africaContext": {
            "senegalInsight": "Dakar abrite le siège historique et un centre de contrôle en route majeur de l'ASECNA (Agence pour la Sécurité de la Navigation Aérienne en Afrique et à Madagascar), qui gère l'espace aérien gigantesque reliant l'Afrique à l'Amérique du Sud au-dessus de l'Océan Atlantique.",
            "westAfricaOpportunities": "Les contrôleurs aériens formés à l'EAMAC et en poste à Dakar gèrent à la fois le trafic d'AIBD et le transit océanique transatlantique stratégique.",
            "localChampions": ["ASECNA (Dakar / EAMAC)", "ANACIM Sénégal", "Aéroport International Blaise Diagne (AIBD SA)"]
        },
        "salary": {
            "france": {"entry": 45000, "mid": 75000, "expert": 115000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant. Salaires bruts statutaires DGAC complétés par les primes de technicité (4 000 à 7 500 € net/mois en carrière confirmée)."},
            "senegal": {"entry": 1200000, "mid": 2400000, "expert": 4200000, "currency": "FCFA", "period": "mois", "note": "Statut de cadre international de l'ASECNA avec indemnités de responsabilité aérienne"}
        },
        "connectedFamilies": ["sciences-biotech", "numerique-ia"],
        "relatedJobs": ["pilote-de-ligne", "personnel-navigant-commercial-pnc", "chef-escale-aeroportuaire"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Contrôleur aérien", "url": "https://www.letudiant.fr/metiers/secteur/aeronautique-et-espace/controleur-aerien.html", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers du secteur transport et logistique", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique.html", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": False,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En Europe, les contrôleurs aériens gèrent plus de 30 000 vols commerciaux par jour en été, avec parfois moins de 90 secondes d'intervalle entre deux avions à l'atterrissage sur les grands aéroports.",
            "pourquoi": "Pour maintenir une telle cadence sans aucun accident, un temps de repos obligatoire est imposé toutes les 2 heures de veille radar pour régénérer l'attention cognitive.",
            "a_retenir": "Le contrôleur aérien est le garant absolu de la sécurité dans le ciel."
        }
    },

    # -----------------------------------------------------------------------
    # 15. PERSONNEL NAVIGANT COMMERCIAL (PNC)
    # -----------------------------------------------------------------------
    {
        "id": "personnel-navigant-commercial-pnc",
        "slug": "personnel-navigant-commercial-pnc",
        "title": "Personnel Navigant Commercial (PNC) / Steward & Hôtesse de l'Air",
        "aliases": ["Hôtesse de l'air", "Steward", "Cabin Crew Member", "Chef de cabine"],
        "icon": "🛫",
        "familyId": "transport-logistique",
        "domain": "Transport Aérien, Aviation Civile & Opérations de Vol",
        "domainId": "transport-aerien-aviation",
        "subdomain": "Sécurité cabine, sauvetage & service en vol",
        "shortDescription": "Assure la sécurité et le bien-être des passagers à bord des avions de ligne, des procédures d'urgence au service commercial.",
        "longDescription": "Le Personnel Navigant Commercial (PNC), couramment appelé hôtesse de l'air ou steward, est avant tout un sauveteur professionnel en milieu confiné. Avant même de servir les repas ou de veiller au confort, sa mission première et vitale est d'assurer la sécurité en cabine : vérification des équipements de survie, démonstration des consignes de sécurité, gestes de premiers secours et évacuation d'urgence de l'avion en moins de 90 secondes en cas de crash.",
        "missions": [
            "Effectuer les vérifications de sécurité pré-vol de tous les équipements de cabine (extincteurs, gilets, masques à oxygène, toboggans)",
            "Accueillir les passagers, vérifier les cartes d'accès à bord et veiller au rangement sécurisé des bagages de cabine",
            "Présenter les consignes de sécurité obligatoires et s'assurer du respect des règles (ceintures attachées, téléphones en mode avion)",
            "Assurer le service commercial à bord (repas, boissons, ventes hors taxes) avec une courtoisie irréprochable",
            "Prendre en charge les urgences médicales en vol (réanimation cardio-pulmonaire, utilisation du défibrillateur) et guider l'évacuation en cas d'accident"
        ],
        "workEnvironment": ["Cabine d'avion de ligne en vol et au sol", "Escale dans des villes et pays variés à chaque rotation", "Horaires décalés, travail les week-ends et décalage horaire récurrent"],
        "typicalDay": [
            {"time": "06:15", "desc": "Présentation au centre de briefing de la compagnie et vérification de la validité du certificat médical et des documents de vol"},
            {"time": "06:45", "desc": "Briefing de sécurité avec le chef de cabine et le commandant de bord sur la météo et les protocoles du jour"},
            {"time": "07:15", "desc": "Contrôle minutieux des équipements d'urgence en cabine (portes, torches, balises) et des stocks de galley"},
            {"time": "07:45", "desc": "Embarquement des 180 passagers, gestion des placements et fermeture des portes pour le départ"},
            {"time": "12:30", "desc": "Atterrissage à destination, débarquement des passagers, vérification qu'aucun objet suspect n'a été oublié et fin de service"}
        ],
        "companyRole": "Premier ambassadeur humain de la compagnie aérienne et ange gardien de la sécurité des passagers en altitude.",
        "skills": {
            "technical": [
                "Maîtrise absolue des procédures de sécurité et de sauvetage en mer/terre (évacuation, survie)",
                "Secourisme d'urgence aéronautique (massage cardiaque, DEA, traitement du malaise en vol)",
                "Lutte contre les incendies en cabine et gestion des matières dangereuses en soute/cabine",
                "Anglais courant indispensable (niveau B2 minimum, attesté par TOEIC) et deuxième langue étrangère valorisée"
            ],
            "human": ["Empathie, courtoisie et excellente présentation", "Sang-froid exemplaire et autorité bienveillante en situation de panique", "Résistance physique à la station debout prolongée et aux variations de pression", "Esprit d'équipe et adaptabilité à des collègues différents à chaque vol"],
            "tools": ["Bouteilles d'oxygène d'urgence et masques O2", "Extincteurs au halon / eau", "Défibrillateur Automatique Externe (DAE)", "Toboggans d'évacuation et canots de sauvetage pneumatiques", "Systèmes d'interphonie cabine et galleys de restauration"]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac Général, Technologique ou Professionnel", "desc": "Niveau minimal requis pour se présenter à la formation PNC."},
                {"step": "Certificat de Membre d'Équipage de Cabine (CCA)", "title": "Cabin Crew Attestation (CCA)", "desc": "Formation théorique et pratique de 3 à 5 semaines dans un centre agréé par la DGAC, avec épreuves en piscine et simulateur de feu."}
            ],
            "schools": [
                {"name": "Centres de formation CCA agréés DGAC (Air Form, ILIA, ESMA Aviation Academy) — France", "country": "France", "scope": "France"},
                {"name": "Centre de formation Air France — France", "country": "France", "scope": "France"},
                {"name": "Institut Africain des Métiers de l'Aérien (IAMA) — Régional Afrique de l'Ouest", "country": "Sénégal / Mali", "scope": "Afrique de l'Ouest"},
                {"name": "Centres de formation aéronautique agréés ANACIM — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Cabin Crew Attestation (CCA) européen ou équivalent international OACI", "Certificat d'Aptitude Médicale PNC de Classe 2", "Score TOEIC certifiant le niveau d'anglais (généralement >= 720 points)"]
        },
        "career": {
            "sectors": ["Compagnies Aériennes Régulières Internationales", "Compagnies Low-Cost (Ryanair, EasyJet, Transavia)", "Compagnies de Vols Charters et Vacances", "Aviation d'Affaires VIP et Gouvernementale"],
            "employerTypes": ["Compagnies aériennes commerciales", "Compagnies de jets privés"],
            "evolution": ["Chef de Cabine (responsable de l'équipe PNC sur moyen-courrier)", "Chef de Cabine Principal (sur gros-porteurs long-courrier)", "Instructeur PNC en centre de formation", "Cadre au sol au sein de la direction du service en vol"],
            "pros": ["Opportunité extraordinaire de voyager et de découvrir le monde", "Emploi du temps flexible avec plusieurs jours de repos consécutifs", "Travail non sédentaire riche en rencontres humaines"],
            "cons": ["Fatigue physique importante due aux changements d'altitude, à l'air sec et aux décalages horaires", "Éloignement familial lors des rotations de plusieurs jours", "Gestion de passagers parfois difficiles ou stressés"]
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à la natation (épreuve éliminatoire du CCA : nager 50 mètres habillé en moins de 1 minute 30) et passer son certificat de secourisme PSC1.",
            "steps": [
                "Perfectionner son niveau d'anglais oral pour réussir les entretiens de recrutement",
                "Passer la visite médicale d'aptitude physique et mentale auprès d'un médecin agréé aéronautique",
                "S'inscrire dans une école certifiée pour préparer l'examen théorique et pratique du CCA"
            ],
            "freeResources": ["Guides officiels de la DGAC sur le diplôme CCA", "Vidéos de démonstration des épreuves pratiques en cabine enfumée", "Fiches conseils de recrutement des compagnies aériennes"]
        },
        "aiImpact": {
            "summary": "Si des bornes automatisent l'embarquement et la gestion des repas, la présence humaine du PNC reste strictement obligatoire et irremplaçable par les conventions internationales pour garantir la sécurité et l'évacuation des passagers.",
            "positiveImpacts": ["Traducteurs vocaux instantanés par IA facilitant le dialogue avec les passagers de toutes langues", "Tablettes connectées anticipant les besoins personnalisés des voyageurs fréquents"],
            "risksAndChallenges": ["La technologie ne peut en aucun cas remplacer l'empathie humaine et le réflexe de sauvetage"],
            "recommendedSkills": ["Maîtrise des outils digitaux embarqués de relation client", "Gestion de la communication interculturelle"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la compagnie nationale Air Sénégal recrute régulièrement des promotions d'hôtesses et stewards sénégalais pour incarner l'hospitalité légendaire du pays (la 'Teranga') sur ses liaisons vers l'Europe, l'Afrique de l'Ouest et les États-Unis.",
            "westAfricaOpportunities": "Débouchés intéressants auprès des compagnies internationales desservant l'AIBD (Air France, Brussels Airlines, Turkish Airlines, Delta, Royal Air Maroc).",
            "localChampions": ["Air Sénégal SA", "Transair Sénégal", "AIBD Ground Handling", "Compagnies aériennes régionales ouest-africaines"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 35000, "expert": 50000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant. Salaire de base + indemnités d'escale, primes de vol et défraiements (1800 à 3200 € net/mois en long-courrier)."},
            "senegal": {"entry": 450000, "mid": 850000, "expert": 1500000, "currency": "FCFA", "period": "mois", "note": "PNC sur compagnies aériennes basées à Dakar + per diem en devises lors des escales internationales"}
        },
        "connectedFamilies": ["tourisme-hotellerie", "sante-biomedical"],
        "relatedJobs": ["pilote-de-ligne", "chef-escale-aeroportuaire", "controleur-aerien"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Hôtesse de l'air", "url": "https://www.letudiant.fr/metiers/secteur/aeronautique-et-espace/hotesse-de-lair.html", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers du secteur transport et logistique", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique.html", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": False,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon la réglementation aérienne internationale, les constructeurs d'avions doivent prouver qu'un appareil de 500 passagers peut être totalement évacué en moins de 90 secondes avec la moitié des issues de secours bloquées !",
            "pourquoi": "C'est le PNC qui dirige cette manœuvre ultra-rapide au péril de sa propre vie.",
            "a_retenir": "Derrière le sourire et l'uniforme impeccable, le PNC est avant tout un sauveteur d'élite."
        }
    },

    # -----------------------------------------------------------------------
    # 16. DÉCLARANT EN DOUANE
    # -----------------------------------------------------------------------
    {
        "id": "declarant-en-douane",
        "slug": "declarant-en-douane",
        "title": "Déclarant en Douane / Déclarant Maritime & Aérien",
        "aliases": ["Agent de dédouanement", "Commissionnaire en douane", "Customs Broker / Declarant"],
        "icon": "📋",
        "familyId": "transport-logistique",
        "domain": "Transit International, Douane & Affrètement",
        "domainId": "transit-douane-commerce-intl",
        "subdomain": "Procédures douanières, fiscalité & conformité internationale",
        "shortDescription": "Réalise les formalités administratives et fiscales pour faire entrer ou sortir les marchandises d'un territoire en toute légalité.",
        "longDescription": "Le Déclarant en douane est le juriste opérationnel du transport international. Pour le compte d'entreprises importatrices ou exportatrices, il déclare les marchandises auprès de l'administration des douanes. Il détermine l'espèce tarifaire exacte (code SH), l'origine et la valeur en douane, calcule les droits et taxes applicables (TVA, droits de douane) et s'assure du respect scrupuleux des normes sanitaires, phytosanitaires et sécuritaires pour éviter tout blocage aux frontières.",
        "missions": [
            "Établir les déclarations en douane d'importation et d'exportation sur les plateformes dématérialisées (DELTA, GAINDE)",
            "Déterminer la classification tarifaire exacte des marchandises selon la nomenclature combinée internationale (Code SH)",
            "Calculer les montants des droits de douane, taxes parafiscales et TVA à acquitter par le client",
            "Vérifier la conformité réglementaire (certificats d'origine, licences d'exportation, normes sanitaires et vétérinaires)",
            "Assister aux visites physiques des douaniers lors des contrôles des conteneurs ou colis suspects et défendre le dossier"
        ],
        "workEnvironment": ["Bureau de transit chez un transitaire, un commissionnaire ou un grand importateur", "Zone portuaire, aéroportuaire ou plateforme logistique sous douane", "Relations quotidiennes avec les inspecteurs de la douane"],
        "typicalDay": [
            {"time": "08:15", "desc": "Réception des dossiers d'importation d'un navire porte-conteneurs arrivé la nuit précédente"},
            {"time": "09:30", "desc": "Analyse de la facture commerciale et classement d'une cargaison d'équipements électroniques sous le code SH adéquat"},
            {"time": "11:00", "desc": "Télétransmission de la Déclaration en Douane Unique (DDU) sur le système douanier et obtention du Bon à Enlever (BAE)"},
            {"time": "14:30", "desc": "Déplacement sur le terminal portuaire pour assister un inspecteur des douanes lors de l'ouverture d'un conteneur ciblé"},
            {"time": "16:45", "desc": "Conseil auprès d'un client exportateur sur les accords de libre-échange pour bénéficier d'une exonération de taxes"}
        ],
        "companyRole": "Passeur légal indispensable qui ouvre les portes des frontières aux marchandises mondiales en garantissant la conformité fiscale.",
        "skills": {
            "technical": [
                "Maîtrise approfondie du Code des Douanes de l'Union Européenne (CDU) ou du Code des Douanes de l'UEMOA",
                "Classement tarifaire international (Système Harmonisé - SH), règles d'origine et valeur en douane",
                "Utilisation experte des logiciels douaniers professionnels (DELTA-IE en France, GAINDE au Sénégal)",
                "Connaissance des régimes douaniers particuliers (perfectionnement actif/passif, entrepôt sous douane, transit)"
            ],
            "human": ["Rigueur juridique et précision absolue dans les saisies", "Intégrité morale et probité irréprochable", "Sens aigu de la négociation et diplomatie avec les autorités", "Résistance au stress en cas de blocage de fret urgent"],
            "tools": ["Plateformes douanières officielles (DELTA G/T, DELTA-IE, Prodouane)", "Système GAINDE (Sénégal)", "Tarif douanier intégré (TARIC / RITA)", "Logiciels de transit (CONex, AP+ / Cargo Community Systems)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 (BTS)", "title": "BTS GTLA ou BTS Commerce International", "desc": "Apprentissage des incoterms, de la documentation de transport et des bases douanières."},
                {"step": "Bac +3 (Licence Pro / Titre Pro)", "title": "Licence Pro Métiers du Commerce International ou Titre Pro Déclarant en Douane", "desc": "Spécialisation approfondie en réglementation douanière, contentieux et régimes suspensifs."}
            ],
            "schools": [
                {"name": "Centres AFTRAL et Promotrans (Titre Déclarant en Douane) — France", "country": "France", "scope": "France"},
                {"name": "Universités de France (Licences Pro Douane et Commerce International) — France", "country": "France", "scope": "France"},
                {"name": "École Nationale des Douanes (Dakar - filières civiles et professionnelles) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur de Management (ISM Dakar / BEM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément de Déclarant en Douane délivré par la Direction Générale des Douanes", "Certification Opérateur Économique Agréé (OEA)"]
        },
        "career": {
            "sectors": ["Sociétés de Transit International et Commissionnaires de Transport", "Compagnies Maritimes et Aériennes", "Grands Groupes Industriels et Distributeurs Importateurs", "Cabinets de Conseil en Douane et Commerce Mondial"],
            "employerTypes": ["Entreprises de transport multimodal (Bolloré/AGL, Geodis, DHL Global Forwarding)", "PME de transit en zones portuaires"],
            "evolution": ["Responsable de Service Douane", "Directeur d'Agence de Transit", "Consultant Expert en Stratégie Douanière et Fiscale"],
            "pros": ["Expertise juridique très pointue et rare sur le marché", "Rôle stratégique permettant aux entreprises d'économiser des sommes colossales en taxes", "Grande stabilité de l'emploi"],
            "cons": ["Responsabilité financière et pénale lourde en cas de fausse déclaration", "Évolution permanente des réglementations douanières et sanctions internationales"]
        },
        "gettingStarted": {
            "beginnerProject": "Rechercher la nomenclature douanière à 10 chiffres (code TARIC) d'un produit complexe (ex: une montre connectée avec capteur cardiaque) et calculer les droits de douane et TVA applicables à l'importation.",
            "steps": [
                "Maîtriser les 11 Incoterms 2020 de la Chambre de Commerce Internationale",
                "Apprendre à naviguer dans le tarif douanier RITA / TARIC",
                "Suivre l'actualité des accords commerciaux bilatéraux et des barrières douanières"
            ],
            "freeResources": ["Portail officiel de la Direction Générale des Douanes et Droits Indirects", "Base de données douanière européenne TARIC", "Fiches techniques de Bretagne Supply Chain sur la douane"]
        },
        "aiImpact": {
            "summary": "Des moteurs d'IA suggèrent automatiquement le bon code tarifaire douanier en analysant la description technique et la photo d'un produit, accélérant le dédouanement de 80%.",
            "positiveImpacts": ["Détection automatique des erreurs de calcul et des documents manquants", "Fluidification du passage en douane grâce aux déclarations prédictives"],
            "risksAndChallenges": ["La validation humaine reste impérative car l'entreprise reste pénalement responsable des erreurs de déclaration"],
            "recommendedSkills": ["Audit des propositions de classification générées par l'IA", "Veille juridique sur les restrictions commerciales"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le dédouanement via le système GAINDE (Gestion Automatisée des Informations Douanières et des Échanges) au Port Autonome de Dakar et à l'AIBD représente la première source de recettes fiscales de l'État. Les déclarants en douane y jouent un rôle économique capital pour approvisionner le pays et les voisins sans littoral (Mali).",
            "westAfricaOpportunities": "Rôle central dans l'application des tarifs douaniers communs de la CEDEAO (TEC-CEDEAO) et le déploiement opérationnel de la ZLECAF.",
            "localChampions": ["AGL Sénégal (Bolloré)", "Bolloré Africa Logistics Dakar", "Dakar Terminal", "Transit Fruit Sénégal", "Sénégal Transit & Consignation (SENTRACO)"]
        },
        "salary": {
            "france": {"entry": 27000, "mid": 38000, "expert": 55000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres transit. Profils expérimentés avec agrément très convoités."},
            "senegal": {"entry": 350000, "mid": 650000, "expert": 1300000, "currency": "FCFA", "period": "mois", "note": "Salaires dans les maisons de transit agréées de Dakar et plateformes aéroportuaires"}
        },
        "connectedFamilies": ["droit-management", "finance-fintech", "commerce-marketing"],
        "relatedJobs": ["agent-de-transit-international", "agent-maritime-consignataire", "affreteur-transport"],
        "sources": [
            {"organization": "Bretagne Supply Chain", "title": "Fiche métier : Déclarant-e en douane", "url": "https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers du secteur transport et logistique", "url": "https://www.letudiant.fr/metiers/secteur/transportlogistique.html", "type": "secteur"}
        ],
        "sourceLetudiant": True,
        "sourceSupplyChain": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le Système Harmonisé (SH) utilisé par les déclarants en douane compte plus de 5 000 groupes de produits désignés par un code numérique universel reconnu dans plus de 200 pays à travers le monde.",
            "pourquoi": "Grâce à ce langage universel chiffré, une caisse de mangues ou une turbine d'avion est immédiatement identifiée et taxée de la même façon à Dakar, au Havre ou à Singapour.",
            "a_retenir": "Le déclarant en douane est le polyglotte juridique du commerce international."
        }
    }
]

if __name__ == "__main__":
    print(f"✅ transport_jobs_part1.py : {len(TRANSPORT_JOBS_PART1)} métiers chargés avec succès.")
    for j in TRANSPORT_JOBS_PART1:
        print(f" - [{j['id']}] {j['title']} ({j['domain']})")

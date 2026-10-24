/**
 * Modèles de rapports d'activité par poste du bureau.
 * Chaque modèle décrit les sections du formulaire : texte libre ("text", "textarea"),
 * date, nombre, ou tableau ("table") dont les colonnes sont typées.
 * Les colonnes "amount" sont des montants en FCFA (entiers).
 * `totals` désigne les tableaux dont la somme alimente recettes / dépenses.
 */

const COMMON_CLOSING = [
  { key: 'difficultes', label: 'Difficultés rencontrées', type: 'textarea', placeholder: 'Blocages, besoins, points d\'attention…' },
  { key: 'prochainesEtapes', label: 'Prochaines étapes', type: 'textarea', placeholder: 'Ce qui est prévu pour la période suivante' },
];

const REPORT_TEMPLATES = {
  COORDINATION: {
    label: 'Rapport de coordination',
    icon: '🧭',
    description: 'Synthèse des actions de pilotage, décisions et suivi des pôles.',
    sections: [
      { key: 'resume', label: 'Résumé de la période', type: 'textarea', required: true },
      {
        key: 'actions', label: 'Actions menées', type: 'table',
        columns: [
          { key: 'date', label: 'Date', type: 'date' },
          { key: 'action', label: 'Action', type: 'text' },
          { key: 'resultat', label: 'Résultat', type: 'text' },
        ],
      },
      { key: 'decisions', label: 'Décisions importantes', type: 'textarea' },
      ...COMMON_CLOSING,
    ],
  },

  SECRETARIAT: {
    label: 'Compte rendu / procès-verbal',
    icon: '📝',
    description: 'Compte rendu de réunion : participants, ordre du jour, décisions et actions à suivre.',
    sections: [
      { key: 'dateReunion', label: 'Date de la réunion', type: 'date', required: true },
      {
        key: 'typeReunion', label: 'Type de réunion', type: 'select',
        options: ['Réunion de bureau', 'Assemblée générale', 'Assemblée extraordinaire', 'Réunion de pôle', 'Autre'],
      },
      { key: 'lieu', label: 'Lieu ou lien de la réunion', type: 'text' },
      { key: 'presents', label: 'Membres présents', type: 'textarea', placeholder: 'Un nom par ligne' },
      { key: 'absents', label: 'Membres absents ou excusés', type: 'textarea' },
      { key: 'ordreDuJour', label: 'Ordre du jour', type: 'textarea', required: true },
      { key: 'deliberations', label: 'Échanges et délibérations', type: 'textarea' },
      { key: 'decisions', label: 'Décisions prises', type: 'textarea', required: true },
      {
        key: 'actions', label: 'Actions à mener', type: 'table',
        columns: [
          { key: 'action', label: 'Action', type: 'text' },
          { key: 'responsable', label: 'Responsable', type: 'text' },
          { key: 'echeance', label: 'Échéance', type: 'date' },
        ],
      },
      { key: 'prochaineReunion', label: 'Date de la prochaine réunion', type: 'date' },
    ],
  },

  TRESORERIE: {
    label: 'Rapport financier',
    icon: '💰',
    description: 'Recettes, dépenses et solde de la caisse sur la période.',
    totals: { income: 'recettes', expense: 'depenses' },
    sections: [
      { key: 'soldeInitial', label: 'Solde en début de période (FCFA)', type: 'number', required: true },
      {
        key: 'recettes', label: 'Recettes', type: 'table',
        columns: [
          { key: 'date', label: 'Date', type: 'date' },
          { key: 'libelle', label: 'Libellé', type: 'text' },
          { key: 'source', label: 'Origine (cotisation, don, partenaire…)', type: 'text' },
          { key: 'montant', label: 'Montant (FCFA)', type: 'amount' },
        ],
      },
      {
        key: 'depenses', label: 'Dépenses', type: 'table',
        columns: [
          { key: 'date', label: 'Date', type: 'date' },
          { key: 'libelle', label: 'Libellé', type: 'text' },
          { key: 'beneficiaire', label: 'Bénéficiaire', type: 'text' },
          { key: 'montant', label: 'Montant (FCFA)', type: 'amount' },
        ],
      },
      { key: 'cotisations', label: 'Suivi des cotisations', type: 'textarea', placeholder: 'Membres à jour, relances effectuées…' },
      { key: 'observations', label: 'Observations', type: 'textarea' },
    ],
  },

  COMMUNICATION: {
    label: 'Rapport de communication',
    icon: '📣',
    description: 'Publications réalisées, audience et campagnes à venir.',
    sections: [
      {
        key: 'publications', label: 'Publications réalisées', type: 'table',
        columns: [
          { key: 'date', label: 'Date', type: 'date' },
          { key: 'canal', label: 'Canal', type: 'text' },
          { key: 'sujet', label: 'Sujet', type: 'text' },
          { key: 'lien', label: 'Lien', type: 'text' },
        ],
      },
      { key: 'audience', label: 'Audience et statistiques', type: 'textarea', placeholder: 'Abonnés, portée, interactions…' },
      { key: 'campagnes', label: 'Campagnes à venir', type: 'textarea' },
      ...COMMON_CLOSING,
    ],
  },

  LOGISTIQUE: {
    label: 'Rapport d\'organisation et logistique',
    icon: '📦',
    description: 'Événements organisés, matériel et besoins logistiques.',
    sections: [
      {
        key: 'evenements', label: 'Événements organisés', type: 'table',
        columns: [
          { key: 'date', label: 'Date', type: 'date' },
          { key: 'evenement', label: 'Événement', type: 'text' },
          { key: 'lieu', label: 'Lieu', type: 'text' },
          { key: 'participants', label: 'Participants', type: 'number' },
        ],
      },
      { key: 'materiel', label: 'Matériel et inventaire', type: 'textarea' },
      { key: 'besoins', label: 'Besoins à prévoir', type: 'textarea' },
      ...COMMON_CLOSING,
    ],
  },

  PEDAGOGIE: {
    label: 'Rapport pédagogique',
    icon: '🎓',
    description: 'Formations et ateliers réalisés, bilan et sessions à venir.',
    sections: [
      {
        key: 'sessions', label: 'Formations et ateliers réalisés', type: 'table',
        columns: [
          { key: 'date', label: 'Date', type: 'date' },
          { key: 'intitule', label: 'Intitulé', type: 'text' },
          { key: 'formateur', label: 'Formateur', type: 'text' },
          { key: 'participants', label: 'Participants', type: 'number' },
        ],
      },
      { key: 'bilan', label: 'Bilan et retours des participants', type: 'textarea' },
      { key: 'prochainesSessions', label: 'Sessions à venir', type: 'textarea' },
      ...COMMON_CLOSING,
    ],
  },

  PARTENARIATS: {
    label: 'Rapport partenariats',
    icon: '🤝',
    description: 'Contacts, partenaires et conventions en cours.',
    sections: [
      {
        key: 'partenaires', label: 'Contacts et partenaires', type: 'table',
        columns: [
          { key: 'partenaire', label: 'Partenaire', type: 'text' },
          { key: 'type', label: 'Type de partenariat', type: 'text' },
          { key: 'statut', label: 'Statut', type: 'text' },
          { key: 'prochaineEtape', label: 'Prochaine étape', type: 'text' },
        ],
      },
      { key: 'conventions', label: 'Conventions signées ou en cours', type: 'textarea' },
      { key: 'opportunites', label: 'Opportunités identifiées', type: 'textarea' },
      ...COMMON_CLOSING,
    ],
  },

  PROJETS: {
    label: 'Rapport projets',
    icon: '🚀',
    description: 'Avancement des projets du club.',
    sections: [
      {
        key: 'projets', label: 'Projets suivis', type: 'table',
        columns: [
          { key: 'projet', label: 'Projet', type: 'text' },
          { key: 'avancement', label: 'Avancement (%)', type: 'number' },
          { key: 'statut', label: 'Statut', type: 'text' },
          { key: 'prochaineEtape', label: 'Prochaine étape', type: 'text' },
        ],
      },
      { key: 'realisations', label: 'Réalisations marquantes', type: 'textarea' },
      ...COMMON_CLOSING,
    ],
  },

  VIE_ASSOCIATIVE: {
    label: 'Rapport vie associative',
    icon: '🌍',
    description: 'Accueil des membres, activités et climat de la communauté.',
    sections: [
      { key: 'nouveauxMembres', label: 'Nouveaux membres accueillis', type: 'number' },
      { key: 'activites', label: 'Activités et moments conviviaux', type: 'textarea' },
      { key: 'retours', label: 'Retours et attentes des membres', type: 'textarea' },
      { key: 'propositions', label: 'Propositions', type: 'textarea' },
      ...COMMON_CLOSING,
    ],
  },

  GENERAL: {
    label: 'Rapport d\'activité',
    icon: '📋',
    description: 'Activités réalisées, résultats et suite à donner.',
    sections: [
      { key: 'resume', label: 'Résumé de la période', type: 'textarea', required: true },
      {
        key: 'activites', label: 'Activités réalisées', type: 'table',
        columns: [
          { key: 'date', label: 'Date', type: 'date' },
          { key: 'activite', label: 'Activité', type: 'text' },
          { key: 'resultat', label: 'Résultat', type: 'text' },
        ],
      },
      ...COMMON_CLOSING,
    ],
  },
};

// Modèle déduit de l'intitulé quand le poste n'en a pas de configuré
const TITLE_RULES = [
  [/pr[ée]sident/i, 'COORDINATION'],
  [/secr[ée]taire/i, 'SECRETARIAT'],
  [/tr[ée]sori/i, 'TRESORERIE'],
  [/communication|m[ée]dia/i, 'COMMUNICATION'],
  [/logistique|organisation/i, 'LOGISTIQUE'],
  [/p[ée]dagog|formation/i, 'PEDAGOGIE'],
  [/partenariat|relations/i, 'PARTENARIATS'],
  [/projet|innovation/i, 'PROJETS'],
  [/accueil|vie associative|communaut/i, 'VIE_ASSOCIATIVE'],
];

function templateKeyFor(position) {
  if (position?.reportTemplate && REPORT_TEMPLATES[position.reportTemplate]) {
    return position.reportTemplate;
  }
  const rule = TITLE_RULES.find(([pattern]) => pattern.test(position?.title || ''));
  return rule ? rule[1] : 'GENERAL';
}

// Comptes rendus des mentors (Espace Mentor) : hors des modèles proposés aux postes du bureau
const MENTOR_TEMPLATES = {
  MENTORAT: {
    label: 'Compte rendu de séance de mentorat',
    icon: '🤝',
    description: 'Objectifs de la séance, points abordés, conseils donnés, progression et engagements.',
    sections: [
      { key: 'dateSeance', label: 'Date de la séance', type: 'date', required: true },
      { key: 'format', label: 'Format', type: 'select', options: ['Présentiel', 'Visio', 'Téléphone', 'WhatsApp'] },
      { key: 'duree', label: 'Durée (minutes)', type: 'number' },
      { key: 'objectifs', label: 'Objectifs de la séance', type: 'textarea', required: true },
      { key: 'echanges', label: 'Points abordés', type: 'textarea' },
      { key: 'conseils', label: 'Conseils et ressources partagés', type: 'textarea' },
      { key: 'progression', label: 'Progression du mentoré', type: 'select', options: ['En avance', 'Comme prévu', 'En difficulté', 'À recadrer'] },
      {
        key: 'engagements', label: 'Engagements pris', type: 'table',
        columns: [
          { key: 'action', label: 'Action', type: 'text' },
          { key: 'responsable', label: 'Qui', type: 'text' },
          { key: 'echeance', label: 'Échéance', type: 'date' },
        ],
      },
      { key: 'prochaineSeance', label: 'Prochaine séance', type: 'date' },
      { key: 'observations', label: 'Observations pour la Présidence', type: 'textarea' },
    ],
  },
  SESSION_FORMATION: {
    label: 'Compte rendu de session de formation',
    icon: '🎓',
    description: 'Déroulé de la session, participation, retours et suite prévue.',
    sections: [
      { key: 'dateSession', label: 'Date de la session', type: 'date', required: true },
      { key: 'module', label: 'Module ou thème traité', type: 'text', required: true },
      { key: 'participants', label: 'Participants présents', type: 'number' },
      { key: 'deroule', label: 'Déroulé de la session', type: 'textarea', required: true },
      { key: 'pointsForts', label: 'Points forts', type: 'textarea' },
      { key: 'difficultes', label: 'Difficultés rencontrées', type: 'textarea' },
      { key: 'retours', label: 'Retours des participants', type: 'textarea' },
      { key: 'suite', label: 'Suite prévue', type: 'textarea' },
      { key: 'prochaineSession', label: 'Prochaine session', type: 'date' },
    ],
  },
};

module.exports = { REPORT_TEMPLATES, MENTOR_TEMPLATES, templateKeyFor };

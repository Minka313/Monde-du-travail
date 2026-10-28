// Catégories du forum, organisées autour des rubriques de la plateforme.
// Les anciennes catégories restent lisibles : elles sont rattachées à la nouvelle à l'affichage.
const CATEGORIES = [
  { name: 'Orientation & métiers', icon: '🧭', description: 'Choisir sa voie, découvrir un métier, le test RIASEC' },
  { name: 'Concours & bourses', icon: '🎯', description: 'Préparer un concours, monter un dossier de bourse' },
  { name: 'Études & lycée', icon: '📚', description: 'Séries, filières, méthodes de travail, vie étudiante' },
  { name: 'Stages & premier emploi', icon: '💼', description: 'CV, entretiens, stages, entreprendre' },
  { name: 'Formations du club', icon: '🎓', description: 'Questions sur les ateliers et sessions du club' },
  { name: 'Vie du club', icon: '🤝', description: 'Idées, événements, contributions des membres' },
];

const LEGACY = {
  'Orientation & Métiers': 'Orientation & métiers',
  'Opportunités': 'Concours & bourses',
  'Formations': 'Formations du club',
  'Vie professionnelle': 'Stages & premier emploi',
  'Entrepreneuriat': 'Stages & premier emploi',
  'Vie du Club & Contributions': 'Vie du club',
};

const NAMES = CATEGORIES.map((c) => c.name);
const canonical = (name) => LEGACY[name] || name;
// Toutes les valeurs enregistrées qui correspondent à une catégorie (nouvelle + anciennes)
const storedNames = (name) => {
  const target = canonical(name);
  return [target, ...Object.keys(LEGACY).filter((old) => LEGACY[old] === target)];
};

module.exports = { CATEGORIES, NAMES, LEGACY, canonical, storedNames };

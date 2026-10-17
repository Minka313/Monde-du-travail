/**
 * Configuration ESLint du projet.
 * Phase d'introduction : toutes les règles recommandées sont en « warn ».
 * Le lint signale les problèmes sans jamais bloquer un déploiement ni la CI ;
 * une règle pourra passer en « error » une fois ses avertissements corrigés.
 */
const js = require('@eslint/js');
const globals = require('globals');

const recommendedAsWarnings = Object.fromEntries(
  Object.keys(js.configs.recommended.rules).map((rule) => [rule, 'warn'])
);

module.exports = [
  {
    ignores: [
      '**/node_modules/**',
      '**/coverage/**',
      '**/*.min.js',
      'frontend/js/vendor/**',
      // Catalogues de données générés (plusieurs Mo, aucune logique)
      'frontend/js/orientation-*-data.js',
      // Scripts ponctuels de génération et de vérification
      'execution/**',
      'scripts/**',
    ],
  },
  {
    files: ['**/*.js'],
    rules: {
      ...recommendedAsWarnings,
      'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }],
    },
  },
  {
    // API Node.js (CommonJS)
    files: ['backend/**/*.js', 'api/**/*.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
  },
  {
    files: ['backend/tests/**/*.js'],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
    },
  },
  {
    // Scripts classiques chargés par les pages (pas de modules ES)
    files: ['frontend/js/**/*.js', 'admin-frontend/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'script',
      globals: { ...globals.browser },
    },
  },
  {
    files: ['frontend/sw.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'script',
      globals: { ...globals.serviceworker },
    },
  },
];

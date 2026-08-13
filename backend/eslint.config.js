import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,

  // Config générale pour le code de l'app (server.js, routes, controllers...)
  {
    files: ['**/*.js'],
    ignores: ['**/*.test.js', '**/__tests__/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },

  // Config spécifique pour les fichiers de test Jest
  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },

  // Dossiers à ignorer
  {
    ignores: ['node_modules/**', 'coverage/**'],
  },
];
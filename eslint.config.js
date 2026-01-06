import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'build', 'node_modules']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      /* -------------------- Core JS -------------------- */
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'object-shorthand': 'error',

      /* -------------------- Code Quality -------------------- */
      'complexity': ['warn', 10],
      'max-lines-per-function': ['warn', 80],
      'max-params': ['warn', 4],
      'no-nested-ternary': 'error',
      'no-duplicate-imports': 'error',

      /* -------------------- React / JSX -------------------- */
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-key': 'error',

      /* -------------------- React Hooks -------------------- */
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      /* -------------------- Imports -------------------- */
      'sort-imports': [
        'warn',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],

      /* -------------------- Best Practices -------------------- */
      'consistent-return': 'error',
      'default-case': 'warn',
      'no-fallthrough': 'error',
      'no-implicit-coercion': 'error',

      /* -------------------- Stylistic (Optional) -------------------- */
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-template': 'error',
    },
  },
])

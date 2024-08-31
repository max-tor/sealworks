module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'eslint:recommended', // Use the recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Use recommended rules from eslint-plugin-react
    'plugin:react-hooks/recommended', // Use recommended rules for React hooks
    'plugin:jsx-a11y/recommended', // Use recommended rules for accessibility in JSX
    'plugin:import/errors', // Use recommended import/export rules
    'plugin:import/warnings',
    'plugin:import/typescript', // Use import/export rules that are specific to TypeScript
    'plugin:prettier/recommended', // Use recommended Prettier rules
    'plugin:tailwindcss/recommended',
    'prettier', // Disable ESLint rules that would conflict with Prettier
  ],
  plugins: ['simple-import-sort', 'import-alias', 'tailwindcss'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        map: [['@', './src']],
      }, // This will make eslint-plugin-import resolve imports using TypeScript's config
    },
  },
  env: {
    browser: true, // Browser global variables like `window` and `document`
    es2021: true, // Adds all ECMAScript 2021 globals and automatically sets the `ecmaVersion` parser option to 12
    node: true, // Node.js global variables and Node.js scoping
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Apply TypeScript specific rules
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off explicit return types for TS files
      },
    },
  ],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional: Disable the rule that requires return types on functions
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }], // Enforce Prettier formatting rules, handle different OS line endings
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ], // Ensure consistent import order
    'import-alias/import-alias': [
      'error',
      {
        relativeDepth: 0,
        aliases: [
          { alias: '@', matcher: '^src' }, // src/modules/app/test -> @src/modules/app/test
        ],
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['ts', 'tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/react-in-jsx-scope': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'import'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'import'],
        next: ['const', 'let', 'var', 'import'],
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
  },
};

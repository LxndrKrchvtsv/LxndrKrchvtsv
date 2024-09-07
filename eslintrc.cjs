const path = require('path')

const jsFiles = '**/*.{js,jsx}'
const tsFiles = '**/*.{ts,tsx}'
const distFiles = '**/dist/**'
const storyFiles = '**/*story.{ts,tsx,js,jsx}'
const storiesFiles = '**/*stories.{ts,tsx,js,jsx}'
const testFiles = '**/*.test.{ts,tsx,js,jsx}'

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  ignorePatterns: [distFiles, 'vite.config.ts', 'server/**'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'import', 'eslint-plugin-react-hooks', '@typescript-eslint', 'prettier', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-empty-pattern': 0,
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': 'error',
    'max-lines-per-function': ['error', { max: 120, skipBlankLines: true, skipComments: true }],
    complexity: ['error', 9],
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'import/no-duplicates': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'space-before-blocks': 'error',
    curly: ['error', 'all'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'brace-style': 'error',
    'object-shorthand': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, variables: true }],
    eqeqeq: ['error', 'smart'],
    'no-nested-ternary': 'error',
    'react/react-in-jsx-scope': 0,
    'react/jsx-boolean-value': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': [0],
    'react/prop-types': 'error',
    'react/no-unused-prop-types': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-curly-brace-presence': 'error',
    'react/self-closing-comp': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: [storyFiles, storiesFiles],
      rules: {
        'react/function-component-definition': 'off',
      },
    },
    {
      files: [tsFiles],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          path.resolve(__dirname, 'tsconfig.json'),
        ],
      },
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: [jsFiles],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: [jsFiles, tsFiles],
      excludedFiles: [storyFiles, storiesFiles, testFiles],
      rules: {
        'no-restricted-imports': ['error'],
      },
    },
  ],
}

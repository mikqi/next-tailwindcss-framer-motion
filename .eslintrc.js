module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort',
    'unused-imports',
    'prettier',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [0],
    'react/react-in-jsx-scope': [0],
    'react/jsx-props-no-spreading': [0],
    'react/prop-types': [0],

    // Unused Import
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // /end Unused Import

    // Import Sort
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^\\w', '^\\u0000'],
          ['^@?\\w', '^\\u0000'],
          // Lib, urils and hooks
          ['^lib', '^hooks', '^utils', '^apis'],
          // app
          ['^app'],
          // components
          ['^components', '^container'],
          // zustand store
          ['^store'],
          // configs
          ['^configs', '^locales'],
          // static data
          ['^data'],
          // Other imports
          ['^/'],
          // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          // typings
          ['^typings', '^types'],
          // public asset
          ['^public'],
          // {s}css files
          ['^.+\\.s?css$'],
          // other that didnt fit in
          ['^'],
        ],
      },
    ],
    // /end Import Sort
  },
}

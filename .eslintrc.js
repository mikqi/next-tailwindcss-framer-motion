module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [0],
    'react/react-in-jsx-scope': [0],
    'react/jsx-props-no-spreading': [0],
    'react/prop-types': [0],
  },
}

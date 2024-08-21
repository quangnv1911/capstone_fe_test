// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'promise',
    'react',
    'react-hooks',
    'jsx-a11y',
    'security',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  rules: {
    'no-console': 'error' 
  }
}

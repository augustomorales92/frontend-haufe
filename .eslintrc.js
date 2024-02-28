module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    parser: '@typescript-eslint/parser'
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    strict: 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    "eol-last": "off",
    "no-undef": "off",
    quotes: "off"
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

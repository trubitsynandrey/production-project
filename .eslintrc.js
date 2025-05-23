module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2, { extensions: ['.js', '.jsx', '.tsx', 'ts'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 1,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default=export': 'off',
    'react/function-component-definition': 0,
    'react/button-has-type': 1,
    'react/jsx-props-no-spreading': 1,
    'react/require-default-props': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 1,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 1,
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};

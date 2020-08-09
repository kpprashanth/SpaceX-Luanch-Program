// `.eslintrc.js
module.exports = {
  rules: {
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-unused-collection': 'error',
  },
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:sonarjs/recommended', 'plugin:react/recommended'],
};

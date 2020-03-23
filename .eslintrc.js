module.exports = {
  extends: ['wolox-react', 'plugin:import/typescript'],
  settings: {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
        extensions: ['.js', '.jsx'],
        alias: {
          '~components': './src/app/components',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~redux': './src/redux',
          '~services': './src/services',
          '~utils': './src/utils'
        }
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    'camelcase': 'off',
    'no-array-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off'
  }
};

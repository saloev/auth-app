module.exports = {
  root: true,

  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: ['plugin:vue/essential', '@vue/airbnb', 'eslint:recommended', '@vue/prettier'],
}

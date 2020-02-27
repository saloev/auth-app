module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/auth-app/' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/_var.scss";',
      },
    },
  },
}

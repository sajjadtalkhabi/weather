const path = require('path');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@Assets': path.resolve(__dirname, 'src/assets'),
        '@Styles': path.resolve(__dirname, 'src/styles'),
        '@': path.resolve(__dirname, 'src/')
      },
    },
  }
}
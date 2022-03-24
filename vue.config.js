module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          // "target": 'https://gestionorquestas.herokuapp.com',
          // target: 'http://867d-190-2-106-33.ngrok.io',
          target: 'http://localhost:8080',
          '^/api': '/api',
          changeOrigin: true,
          security: false,
        },
      },
    },
  },

  transpileDependencies: [
    'vuetify',
  ],

  lintOnSave: false
};

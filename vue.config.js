module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          // "target": 'https://gestionorquestas.herokuapp.com',
          target: 'http://867d-190-2-106-33.ngrok.io',
          // target: 'https://bfab-190-17-108-95.ngrok.io',
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

module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          // "target": 'https://gestionorquestas.herokuapp.com',
          target: 'http://127.0.0.1:3333',
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

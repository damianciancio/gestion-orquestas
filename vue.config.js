module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          // "target": 'https://gestionorquestas.herokuapp.com',
          target: 'http://localhost:3333',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
};

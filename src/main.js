import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './helpers/axiosInterceptor';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

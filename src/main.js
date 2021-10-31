import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './helpers/axiosInterceptor';

import 'jquery/src/jquery';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';
import '@/../node_modules/vc-chord-diagram/dist/lib/vc-chord-diagram.min.css';

import TextInput from './components/UI/TextInput.vue';

Vue.component('text-input', TextInput);

import vuetify from './plugins/vuetify';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

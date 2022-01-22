import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './helpers/axiosInterceptor';

import { BootstrapVue } from 'bootstrap-vue';

import 'jquery/src/jquery';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/../node_modules/vc-chord-diagram/dist/lib/vc-chord-diagram.min.css';

import formatMixin from './mixins/FormatMixin';

import TextInput from './components/UI/TextInput.vue';

Vue.use(BootstrapVue);
Vue.component('text-input', TextInput);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import vuetify from './plugins/vuetify';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.mixin(formatMixin);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

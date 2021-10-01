import Vue from 'vue';
import Vuex from 'vuex';

import axios from '@/helpers/axiosInterceptor';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: window.localStorage.getItem('user')
      ? JSON.parse(window.localStorage.getItem('user'))
      : null,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    getUsers(store) {
      const request = axios.get('/api/users');
      request.then((resp) => {
        store.commit('setUsers', resp.data);
      });
      return request;
    },
  },
  getters: {
    users({ users }) {
      return users;
    },
    currentUser({ currentUser }) {
      return currentUser;
    },
  },
  modules: {

  },
});

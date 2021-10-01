<template>
  <div id="app">
    <admin-layout v-if="currentLayout == 'admin'">
      <router-view />
    </admin-layout>
    <user-layout v-if="currentLayout == 'user'">
      <router-view />
    </user-layout>
    <registration-layout v-if="currentLayout == 'login'">
      <router-view />
    </registration-layout>
  </div>
</template>
<script>
import AdminLayout from './layouts/AdminLayout.vue';
import UserLayout from './layouts/UserLayout.vue';
import RegistrationLayout from './layouts/RegistrationLayout.vue';

export default {
  mounted() {
    if (this.$route.name == 'Login') {
    }
  },
  components: {
    'admin-layout': AdminLayout,
    'user-layout': UserLayout,
    'registration-layout': RegistrationLayout,
  },
  data() {
    return {
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    currentLayout() {
      if (this.$route.name == 'Login' || this.$route.name == 'Register') {
        return 'login';
      }

      const { currentUser } = this.$store.getters;
      if (currentUser && currentUser.is_admin == 1) {
        return 'admin';
      }
      return 'user';
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';

</style>

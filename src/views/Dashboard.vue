<template>
  <div>
    <a class="dashboard-card" :href="resourcesHref">
      <div class="dashboard-card-icon"><Music :size="48"></Music></div>
      <div><h1>Recursos</h1></div>
    </a>
    <a class="dashboard-card" :href="usersHref">
      <div class="dashboard-card-icon"><Account :size="48"></Account></div>
      <div><h1>Usuarios</h1></div>
    </a>
    <a class="dashboard-card" :href="newsHref">
      <div class="dashboard-card-icon"><Newspaper :size="48"></Newspaper></div>
      <div><h1>Noticias</h1></div>
    </a>
    <a class="dashboard-card" :href="showsHref">
      <div class="dashboard-card-icon"><Theater :size="48"></Theater></div>
      <div><h1>Shows</h1></div>
    </a>
  </div>
</template>
<script>
import axios from "@/helpers/axiosInterceptor.js";
import Music from "vue-material-design-icons/Music.vue";
import Account from "vue-material-design-icons/Account.vue";
import Newspaper from "vue-material-design-icons/Newspaper.vue";
import Theater from "vue-material-design-icons/Theater.vue";

export default {
  components: {
    Music,
    Account,
    Newspaper,
    Theater
  },
  computed: {
    resourcesHref() {
      const route = this.$router.options.routes.find(r => r.name === "Recursos");
      return route.path;
    },
    usersHref() {
      const route = this.$router.options.routes.find(r => r.name === "Usuarios");
      return route.path;
    },
    newsHref() {
      const route = this.$router.options.routes.find(r => r.name === "NewsManagement");
      return route.path;
    },
    showsHref() {
      const route = this.$router.options.routes.find(r => r.name === "ShowsManagement");
      return route.path;
    },
  }
};
</script>
<style scoped>
.dashboard-card {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  background: var(--secondary);
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
.dashboard-card-icon {
  width: 200px;
}
</style>

<template>
  <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
    <li v-for="link in links" :key="link.name" class="nav-item">
      <router-link class="nav-link pl-0" :to="{ name: link.name }">{{
        link.meta.link_name
      }}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  mounted() {
    this.links = this.$router.options.routes.filter((route) => route.meta.is_admin == 1);
  },
};
</script>

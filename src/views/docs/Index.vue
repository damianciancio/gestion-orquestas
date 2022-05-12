<template>
  <div>
    <div v-for="route in links" :key="route.name">
      <router-link :to="route">{{ route.meta.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: []
    };
  },
  mounted() {
    const mainRoute = this.$router.options.routes.find(route => route.meta.is_docs);
    this.links = mainRoute.children.filter(route => route.meta.is_docs);
  }
};
</script>

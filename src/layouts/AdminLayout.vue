<template>
  <div id="admin-layout" class="container-fluid h-100">
    <div class="row h-100">
      <aside class="col-12 col-md-2 p-0 bg-dark">
        <nav
          class="
            navbar navbar-expand navbar-dark
            bg-dark
            flex-md-column flex-row
            align-items-start
          "
        >
          <div class="collapse navbar-collapse">
            <admin-menu></admin-menu>
          </div>
        </nav>
      </aside>
      <main class="col">
        <nav class="d-flex justify-content-between">
          <div>
            <h1>{{ title }}</h1>
          </div>
          <account-menu></account-menu>
        </nav>
        <section>
          <slot></slot>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
import AdminMenu from "@/components/Menus/AdminMenu.vue";
import AccountMenu from "../components/Menus/AccountMenu.vue";

export default {
  components: {
    "admin-menu": AdminMenu,
    "account-menu": AccountMenu,
  },
  computed: {
    title() {
      return this.$route.meta.link_name;
    },
  },
};
</script>
<style lang="scss">
#admin-layout > div > main > section {
  padding: 20px 80px;
}
#admin-layout > div > main > nav {
  padding: 30px 80px;
  border-bottom: 1px solid var(--light);
}
</style>

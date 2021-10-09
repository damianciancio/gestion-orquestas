<template>
  <div>
    <a>Mi cuenta</a> |
    <button class="btn btn-link" v-on:click="logout">Cerrar sesión</button>
  </div>
</template>
<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.push({name: 'Home'})
        }
    }
}
</script>
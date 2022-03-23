<template>
  <div>
    <router-link :to="{ name: 'UserProfile', params: { id: currentUser.id} }">Mi cuenta</router-link>
    |
    <router-link :to="{ name: 'MyTickets' }">Mis Entradas</router-link>
    |
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
    },
    computed: {
      currentUser() {
        return this.$store.getters.currentUser;
      }
    }
}
</script>
<template>
    <div  id="login-container" class="card">
        <h1>Iniciar Sesión</h1>
        <form class="">
            <div class="mb-3">
                <label>Usuario</label>
                <input v-model="username" class="form-control" type="text" />
            </div>
            <div class="mb-3">
                <label>Contraseña</label>
                <input v-model="password" class="form-control" type="password" />
            </div>
            <button v-on:click="login" type="button" class="btn btn-primary mb-3">Iniciar Sesión</button>
            <div class="">
                <span>¿No tenés una cuenta? <router-link :to="{name: 'Register'}">Registrate</router-link></span>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
        const req = this.$store.dispatch('login', {username: this.username, password: this.password});
        req.then(resp => {this.$router.replace({ name: 'Dashboard' })});
    },
  },

};
</script>
<style lang="scss" scoped>
#login-container {
    padding: 50px;
}
</style>

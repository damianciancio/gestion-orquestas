<template>
  <div id="login-container" class="card">
    <h1>Registro</h1>
    <div class="col-md-12">
    <div class="row">
        <div class="mb-3 col-md-12 col-xs-12">
          <label>Nombre de Usuario</label>
          <input v-model="username" class="form-control" type="text" />
        </div>
        <div class="mb-3 col-md-6 col-xs-12">
          <label>Contraseña</label>
          <input v-model="password" class="form-control" type="password" />
        </div>
        <div class="mb-3 col-md-6 col-xs-12">
          <label>Repetí la contraseña</label>
          <input v-model="password1" class="form-control" type="password" />
        </div>
        <div class="mb-3 col-md-6 col-xs-12">
          <label>Nombre</label>
          <input v-model="name" class="form-control" type="text" />
        </div>
        <div class="mb-3 col-md-6 col-xs-12">
          <label>Apellido</label>
          <input v-model="lastname" class="form-control" type="text" />
        </div>
        <div class="mb-3 col-md-12 col-xs-12">
          <label>Dirección</label>
          <input v-model="address" class="form-control" type="text" />
        </div>
        <div class="mb-3 col-md-6 col-xs-12">
            <button v-on:click="login" type="button" class="btn btn-primary mb-3">
            Iniciar Sesión
            </button>
        </div>
        <div class="">
          <span
            >¿Ya tenés cuenta?
            <router-link :to="{ name: 'Login' }"
              >Iniciá sesión</router-link
            ></span
          >
        </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#login-container {
    padding: 50px;
}

@media (min-width:1200px) {
    #login-container {
        width: 700px;
    }
}
</style>
<template>
    <div class="row">
        <div class="col-md-12">
            <h2>Listado de Usuarios</h2>
        </div>
        <div class="col-md-12">
            <table class="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre de Usuario</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>
                            {{ user.id}}
                        </td>
                        <td>
                            {{ user.username}}
                        </td>
                        <td>
                            {{ user.name}}
                        </td>
                        <td>
                            {{ user.lastname}}
                        </td>
                        <td>
                            {{ user.email}}
                        </td>
                        <td>
                            {{ user.address}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from '@/helpers/axiosInterceptor';

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    const request = axios.get('/api/users');
    request.then((resp) => {
      this.users = resp.data;
    });
  },
};
</script>

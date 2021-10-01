<template>
    <div class="row">
        <div class="col-md-12">
            <div class="d-flex justify-content-between">
                <h2>Listado de Usuarios</h2>
                <button class="btn btn-primary"><AccountPlus />Agregar</button>
            </div>
        </div>
        <div class="col-md-12">
            <v-data-table 
                :headers="tableheaders"
                :items="users"
            >
            <template v-slot:item.actions="{item}" >
                <button class="btn btn-primary btn-sm"><AccountEdit /></button>
                <button class="btn btn-danger btn-sm"><Delete /></button>
            </template>
            </v-data-table>
        </div>
    </div>
</template>
<script>
import axios from '@/helpers/axiosInterceptor';
import AccountEdit from 'vue-material-design-icons/AccountEdit.vue';
import AccountPlus from 'vue-material-design-icons/AccountPlus.vue';
import Delete from 'vue-material-design-icons/Delete.vue';

export default {
    components: {
        AccountEdit,
        Delete,
        AccountPlus
    },
  data() {
    return {
      users: [],
      tableheaders: [
          {
              text: 'ID',
              align: 'start',
              sortable: true,
              value: 'id'
          },
          {
              text: 'Nombre de Usuario',
              align: 'start',
              sortable: true,
              value: 'username'
          },
          {
              text: 'Nombre',
              align: 'start',
              sortable: true,
              value: 'name'
          },
          {
              text: 'Apellido',
              align: 'start',
              sortable: true,
              value: 'lastname'
          },
          {
              text: 'Email',
              align: 'start',
              sortable: true,
              value: 'email'
          },
          {
              text: 'Dirección',
              align: 'start',
              sortable: true,
              value: 'address'
          },
          {
              text: 'Acciones',
              align: 'start',
              sortable: false,
              value: 'actions'
          }
      ]
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

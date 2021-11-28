<template>
    <div data-app v-if="shows" class="col-md-12">
        <div class="d-flex flex-row-reverse">
            <router-link :to="{ name: 'CrearShow' }" class="btn btn-primary"
                ><Plus />Agregar</router-link
            >
        </div>
        <v-data-table :headers="tableHeaders" :items="shows">
            <template v-slot:item.place="{ item }">
                {{ item.place | preview(25) }}
            </template>
            <template v-slot:item.publicDate="{ item }">
                {{ item.publicDate | formatDate('DD/MM/YYYY HH:mm') }}
            </template>
            <template v-slot:item.date="{ item }">
                {{ item.date | formatDate('DD/MM/YYYY HH:mm') }}
            </template>
        </v-data-table>
    </div>
</template>
<script>
import Plus from "vue-material-design-icons/Plus.vue";
import CommentEdit from "vue-material-design-icons/CommentEdit.vue";
import Delete from "vue-material-design-icons/Delete.vue";

import moment from "moment";
import axios from "@/helpers/axiosInterceptor";
export default {
    components: {
        Plus,
        Delete,
        CommentEdit,
    },
    data() {
        return {
            tableHeaders: [
                {
                    text: "Nombre",
                    align: "start",
                    sortable: true,
                    value: "name",
                },
                {
                    text: "Lugar",
                    align: "start",
                    sortable: true,
                    value: "place",
                },
                {
                    text: "Fecha",
                    align: "end",
                    sortable: false,
                    value: "date",
                },
                {
                    text: "Publicación",
                    align: "end",
                    sortable: false,
                    value: "publicDate",
                },
                {
                    text: "Tickets",
                    align: "end",
                    sortable: true,
                    value: "tickets",
                },
            ],
            shows: [],
        };
    },
    mounted() {
        axios
            .get("/api/shows")
            .then((resp) => {
                this.shows = resp.data;
            })
            .catch((e) => {});
    },
    filters: {
        preview: function (text, max = 15) {
            return text.substring(0, max) + "...";
        },
        formatDate(stringDate, format = "DD/MM/YYYY") {
            return moment(stringDate).format(format);
        },
    },
};
</script>
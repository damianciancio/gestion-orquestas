<template>
    <div class="container" v-if="!loading">
        <div id="button-checkout"></div>
        <h1>{{ show.name }}</h1>
        <h4>
            <Calendar></Calendar> {{ show.date | datetime }}
        </h4>
        <h4>
            <Pin></Pin>{{ show.place }}
        </h4>
        <router-link class="btn btn-primary" :to="{name: 'BuyTickets', params: { id: show.id } }">Comprar con Mercado Pago</router-link>
    </div>
</template>
<script>
import axios from "@/helpers/axiosInterceptor";
import Calendar from "vue-material-design-icons/Calendar.vue";
import Pin from "vue-material-design-icons/Pin.vue";

export default {
    components: {
        Calendar,
        Pin,
    },
    data() {
        return {
            show: null,
            preferenceId: null,
            loading: true
        };
    },
    mounted() {
        const showId = this.$route.params.id;
        const request = axios.get("/api/shows", { id: showId });

        request.then((resp) => {
            this.show = resp.data[0];
            this.loading = false;
        });
    },
};
</script>
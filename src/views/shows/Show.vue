<template>
    <div class="container" v-if="!loading">
        <div class="row">
            <div id="button-checkout"></div>
            <h1>{{ show.name }}</h1>
        </div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-md-6">
                <img width="500" src="teatro.jpg" />
            </div>
            <div class="col-md-6">
                <h4>
                    <Calendar></Calendar> {{ show.date | datetime }}
                </h4>
                <h4>
                    <Pin></Pin>{{ show.place }}
                </h4>
                <h5> {{ show.price | money }} </h5>
                <router-link class="btn btn-primary" :to="{name: 'BuyTickets', params: { id: show.id } }">Comprar con Mercado Pago</router-link>
            </div>
        </div>
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
        const request = axios.get("/api/shows", { params: { id: showId }});

        request.then((resp) => {
            this.show = resp.data;
            this.loading = false;
        });
    },
    filters: {
        money(number) {
            return '$' + number;
        }
    }
};
</script>
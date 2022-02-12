<template>
    <div class="container">
        <div>
            <h1>{{ show.name }}</h1>
            <h4><Calendar></Calendar> {{ show.date | datetime }}</h4>
            <h4><Pin></Pin>{{ show.place }}</h4>
            <h4><Pin></Pin>{{ show.price | money }}</h4>
        </div>
        <div>
            <label>Cantidad</label>
            <input class="form-control" type="number" v-model="quantity" />
        </div>
        <button
            class="btn btn-primary"
            v-if="!mpResponse"
            v-on:click="buyTickets"
        >
            Confirmar
        </button>
        <!--template>{{ mpResponse }}</template-->
        <div id="button-checkout"></div>
    </div>
</template>
<script>
import axios from "@/helpers/axiosInterceptor";

export default {
    data() {
        return {
            mpResponse: null,
            quantity: 0,
            mercadopago: null,
            show: null,
        };
    },
    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },
    filters: {
        money(number) {
            return "$" + number;
        },
    },
    mounted() {
        this.mercadopago = new MercadoPago(
            "TEST-a9731b02-1568-4d47-acc3-8bc4933fd619",
            {
                locale: "es-AR",
            }
        );

        const showId = this.$route.params.id;
        const request = axios.get("/api/shows", { id: showId });

        request.then((resp) => {
            this.show = resp.data[0];
            this.loading = false;
        });
    },
    methods: {
        buyTickets() {
            console.log(this.currentUser.id);
            const request = axios.post("/api/mercadopago", {
                user_id: this.currentUser.id,
                quantity: this.quantity,
                show_id: this.show.id,
            });
            request.then((response) => {
                this.preferenceId = response.data.preferenceID;

                this.mpResponse = response.data;

                this.mercadopago.checkout({
                    preference: {
                        id: this.preferenceId,
                    },
                    render: {
                        container: "#button-checkout", // Class name where the payment button will be displayed
                        label: "Pagar!", // Change the payment button text (optional)
                    },
                });
            });
        },
    },
};
</script>
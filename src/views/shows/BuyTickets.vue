<template>
  <div class="container">
    <div class="row">
      <h1>{{ show.name }}</h1>
    </div>
    <div class="row" style="margin-bottom: 20px;">
      <div class="col-md-6">
        <img
          style="max-height:100%; max-width:100%;"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Dublin_Philharmonic_Orchestra_performing_Tchaikovsky%27s_Symphony_No_4_in_Charlotte%2C_North_Carolina.jpg/800px-Dublin_Philharmonic_Orchestra_performing_Tchaikovsky%27s_Symphony_No_4_in_Charlotte%2C_North_Carolina.jpg"
        />
      </div>
      <div class="col-md-6">
        <h4><Calendar></Calendar> {{ show.date | datetime }}</h4>
        <h4><Pin></Pin>{{ show.place }}</h4>
        <h5>{{ show.price | money }}</h5>
        <div v-if="true">
          <div style="margin-bottom: 20px;">
            <label>Cantidad</label>
            <input class="form-control" type="number" v-model="quantity" />
          </div>
          <button class="grm-link-button" v-on:click="buyTickets" style="margin-bottom: 20px;">
            Confirmar
          </button>
          <!--template>{{ mpResponse }}</template-->
        </div>
        <div v-else>
          <div style="margin-bottom: 20px;">
            <label>Cantidad: {{ quantity }}</label>
          </div>
        </div>
        <!-- <div id="button-checkout" class="grm-link-button"></div> -->
      </div>
    </div>
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
      show: null
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  filters: {
    money(number) {
      return "$" + number;
    }
  },
  mounted() {
    this.mercadopago = new MercadoPago("TEST-a9731b02-1568-4d47-acc3-8bc4933fd619", {
      locale: "es-AR"
    });

    const showId = this.$route.params.id;
    const request = axios.get("/api/shows", { params: { id: showId } });

    request.then(resp => {
      this.show = resp.data;
      this.loading = false;
    });
  },
  watch: {
    mpResponse(value) {
      if (value) {
        this.mercadopago.checkout({
          preference: {
            id: this.preferenceId
          },
          autoOpen: true
        });
      }
    }
  },
  methods: {
    buyTickets() {
      const request = axios.post("/api/mercadopago", {
        user_id: this.currentUser.id,
        quantity: this.quantity,
        show_id: this.show.id
      });
      request.then(response => {
        this.preferenceId = response.data.preferenceID;

        this.mpResponse = response.data;
      });
    }
  }
};
</script>
<style scoped>
.mercadopago-button {
  background-color: var(--primary);
}
</style>

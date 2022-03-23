<template>
  <div>
    <div class="row">
        <h1>
        Mis entradas
        </h1>
    </div>
    <div v-for="show in ticketsByShow" :key="show.id" class="row">
        <h3>{{show.name}}</h3>
        <div v-for="ticket in show.userTickets" class="col-md-12 mb-5 ticket-card" style="background-color: white !important" :key="ticket.id">
            <h5>Ticket N° {{ ticket.id }}</h5>
            <qr-code :text="ticket.code"></qr-code>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "../../helpers/axiosInterceptor";
export default {
  data() {
    return {
      tickets: [],
      ticketsByShow: [],
    };
  },
  async mounted() {
    const userId = this.$store.getters.currentUser.id;

    try {
      const response = await axios.get("/api/tickets", { params: { user_id: userId } });
      this.tickets = response.data;
        console.log(this.tickets);

        const shows = [];
        this.tickets.forEach((ticket) => {
            const found = shows.find(s => s.id === ticket.show.id);
            if (!found) {
                const newShow = ticket.show;
                newShow.userTickets = [];
                shows.push(newShow);
            }
        });

        this.tickets.forEach((ticket) => {
            const found = shows.find(s => s.id === ticket.show.id);
            found.userTickets.push({...ticket, show: null});
        });
        this.ticketsByShow = shows;


    } catch (error) {

    }
  }
};
</script>

<style scoped>
.ticket-card > * {
    color: black !important;
    background-color: white !important;
}
.ticket-card {
    padding: 10px;
    border-radius: 5px;
}
</style>
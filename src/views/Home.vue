<template>
    <div>
        <article>
            <div>
                <h1>Charagua</h1>
                <h2>Suena la orilla</h2>
            </div>
            <div>
                <h3>Últimas noticias</h3>
                <div id="news-container">
                    <new-card v-for="aNew in latestNews" :key="aNew.id" :a-new="aNew" >
                    </new-card>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
import axios from "@/helpers/axiosInterceptor";
import NewCard from "@/components/News/NewCard.vue";

export default {
    components: {
        NewCard,
    },
    data() {
        return {
            latestNews: [],
        };
    },
    async mounted() {
        axios.get("/api/news").then((response) => {
            this.latestNews = response.data;
        });
    },
};
</script>
<style scoped>
#news-container {
    display: flex;
}

#news-container > .card {
    flex: 1;
    max-width: 18rem;
    margin: 5px;
}

#news-container > .card:first-child {
    margin-left: 0px;
}
</style>
<template>
    <div>
        <show-form
            :mode="mode"
            :edit-show="show"
            v-on:submit="handleSubmission($event)"
        ></show-form>
    </div>
</template>
<script>
import ShowForm from "@/components/Forms/ShowForm.vue";
import axios from "@/helpers/axiosInterceptor";
export default {
    data() {
        return {
            aNew: {
                name: "",
                date: "",
                place: "",
                publicDate: "",
                tickets: null
            },
            mode: "add",
        };
    },
    components: {
        ShowForm,
    },
    mounted() {
        if (this.$route.params.id) {
            const request = axios.get("/api/shows", {
                params: { id: this.$route.params.id },
            });
            request.then((resp) => {
                this.show = resp.data;
                this.mode = "edit";
            });
        }
    },
    methods: {
        async handleSubmission(show) {
            await axios.post("/api/shows", show);
            this.$router.replace({ name: "ShowsList" });
        },
    },
};
</script>
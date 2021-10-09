<template>
    <div>
        <div class="d-flex justify-content-between">
            <span>{{ resource.song.title }}</span>
            <span class="bagde badge-primary">{{ resource.typeMusicalResource.name }}</span>
        </div>
        <div v-if="true">
            <musical-resource-text-content mode="view" :value="resource.content" />
        </div>
    </div>
</template>
<script>
import MusicalResourceTextContent from '../components/MusicalResourceTextContent.vue';
export default {
  components: { MusicalResourceTextContent },
    data() {
        return {
            resource: null
        }
    },
    mounted() { 
        const request = this.$store.dispatch('getResource', this.$route.params.id);
        request.then((response) => {
            this.resource = response.data;
            this.$route.meta.link_name = response.data.name;
        });
    }
}
</script>
<template>
  <div>
    <div class="row d-flex justify-content-end">
      <div class="col-md-2">
        <button class="btn btn-primary" v-on:click="save">Guardar</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <label>Nombre</label>
        <text-input v-model="resource.name"></text-input>
      </div>
      <div class="col-md-4">
        <label>Canción</label>
        <select class="form-control" v-model="resource.song">
          <option :value="song" v-for="song in songs" :key="song.id">
            {{ song.title }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <label>Tipo</label>
        <select class="form-control" v-model="resource.typeMusicalResource">
          <option
            :value="type"
            v-for="type in musicalResourceTypes"
            :key="type.id"
          >
            {{ type.name }}
          </option>
        </select>
      </div>
      <div class="row mt-4">
        <MusicalResourceTextContent
          :mode="'edition'"
          v-model="resource.content"
        ></MusicalResourceTextContent>
      </div>
    </div>
  </div>
</template>
<script>
import MusicalResourceTextContent from "@/components/MusicalResourceTextContent";
import TextInput from "@/components/UI/TextInput";

export default {
  components: {
    TextInput,
    MusicalResourceTextContent,
  },
  data() {
    return {
      resource: {
        name: "",
        description: "",
        song: null,
        typeMusicalResource: null,
        content: "",
      },
      mode: 'add'
    };
  },
  mounted() {
    this.$store.dispatch("fetchSongs");
    this.$store.dispatch("fetchMusicalResourceTypes");
    if (this.$route.params.hasOwnProperty('id')) {
        this.mode = 'edit';
        const id = this.$route.params.id;
        const request = this.$store.dispatch('getResource', id);
        request.then(({data}) => {
            this.resource = data;
            this.$route.meta.link_name = data.name
        })
    }
  },
  computed: {
    songs() {
      return this.$store.getters.songs;
    },
    musicalResourceTypes() {
      return this.$store.getters.musicalResourceTypes;
    },
  },
  methods:{
      async save() {
          if (this.validate()) {
            await this.$store.dispatch('addMusicalResource', this.resource);
            await this.$store.dispatch('fetchResources');
            this.$router.push({name: 'Recursos'});
          }
      },
      validate() {
          return true;
      }
  }
};
</script>
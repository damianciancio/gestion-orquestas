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
      <!--div class="col-md-4">
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
      </div-->
      <div class="row mt-4">
        {{resource.typeMusicalResource}}
        <MusicalResourceTextContent
          v-if="resource.typeMusicalResource.systemName == 'texto'"
          :mode="mode"
          v-model="resource.content"
        ></MusicalResourceTextContent>
        <MusicalResourceImageContent
          v-if="resource.typeMusicalResource.systemName == 'imagen'"
          :mode="mode"
          v-model="resource.content"
        ></MusicalResourceImageContent>

        <MusicalResourceVideoContent
          v-if="resource.typeMusicalResource.systemName == 'video'"
          :mode="mode"
          v-model="resource.content"
        ></MusicalResourceVideoContent>
      </div>
    </div>
  </div>
</template>
<script>
import MusicalResourceTextContent from "@/components/MusicalResourceTextContent";
import MusicalResourceImageContent from "@/components/MusicalResourceImageContent";
import MusicalResourceVideoContent from "@/components/MusicalResourceVideoContent";
import TextInput from "@/components/UI/TextInput";

export default {
  components: {
    TextInput,
    MusicalResourceTextContent,
    MusicalResourceImageContent,
    MusicalResourceVideoContent
  },
  data() {
    return {
      resource: {
        name: "",
        description: "",
        song: null,
        typeMusicalResource: {},
        content: "",
      },
      mode: "add",
    };
  },
  mounted() {
    this.$store.dispatch("fetchSongs");
    this.$store.dispatch("fetchMusicalResourceTypes").then(() => {
      if (this.$route.params.hasOwnProperty("id")) {
        this.mode = "edit";
        const id = this.$route.params.id;
        const request = this.$store.dispatch("getResource", id);
        request.then(({ data }) => {
          this.resource = data;
          this.$route.meta.link_name = data.name;
        });
      }
      if (this.$route.params.hasOwnProperty("type")) {
        this.resource.typeMusicalResource = this.musicalResourceTypes.find(
          (type) => {
            if (this.$route.params.type == type.systemName) {
              return true;
            }
          }
        );
      }
    });
  },
  computed: {
    songs() {
      return this.$store.getters.songs;
    },
    musicalResourceTypes() {
      return this.$store.getters.musicalResourceTypes;
    },
  },
  methods: {
    async save() {
      if (this.validate()) {
        await this.$store.dispatch("addMusicalResource", this.resource);
        await this.$store.dispatch("fetchResources");
        this.$router.push({ name: "Recursos" });
      }
    },
    validate() {
      return true;
    },
  },
};
</script>
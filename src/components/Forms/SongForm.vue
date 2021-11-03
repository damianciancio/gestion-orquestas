<template>
  <div>
    <div class="form-group">
      <label>Nombre</label>
      <input type="text" v-model="song.title" class="form-control" />
    </div>
    <div class="form-group">
      <label>Autor</label>
      <input type="text" v-model="song.author" class="form-control" />
    </div>
    <div class="form-group">
        <button class="btn btn-primary" v-on:click="submit">Confirmar</button>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  props: ["editSong", "mode"],

  data() {
    return {
      song: {
          title: "",
          author: ""
      },
    };
  },
  validations: {
    song: {
      title: {
        required,
      },
      author: {
        required,
      },
    },
  },
  watch: {
    editSong(newVal) {
      this.song = { ...newVal };
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("submit", this.song);
      }
    },
  },
};
</script>
<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ title }}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a
        class="dropdown-item"
        v-for="item in items"
        :key="item[label]"
        v-on:click="clicked(item)"
        >{{ item[label] }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    items: {
      required: true,
      type: Array,
    },
    label: {
      default: "text",
      type: String,
    },
  },
  methods: {
    clicked(item) {
      this.$emit("clicked", item);
    },
  },
};
</script>
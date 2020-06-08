<template>
  <div class="mt-3">
    <h1>Belajar Penulisan Template</h1>

    <!-- Data Raw HTML -->
    <hr />
    <br />
    <h3>Raw HTML</h3>
    <span v-html="danger"></span>
    <span v-html="primary"></span>
    <hr />

    <!-- Data Attribute -->
    <hr />
    <br />
    <h3>Data Attribute</h3>
    <h1 v-bind:class="title">{{ message }}</h1>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Raw HTML
      danger: "<span class='btn btn-danger btn-block'> Danger </span>",
      primary: "<span class='btn btn-primary btn-block'>Primary </span>",

      // Data Attribute
      message: "VueJS Framework",
      title: "title",

      //   JS Expression
    };
  },
};
</script>

<style>
.title {
  color: lime;
}
</style>

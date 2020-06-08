<template>
  <div>
    <h1>Belajar Directive</h1>

    <hr />
    <h3>V-IF Example</h3>
    <hr />
    <div v-if="nilai > 90">
      Sempurna
    </div>
    <div v-else-if="nilai > 80">
      Bagus
    </div>
    <div v-else-if="nilai > 70">
      Cukup
    </div>
    <div v-else-if="nilai > 60">
      Kurang
    </div>
    <div v-else>
      Gak Lulus
    </div>

    <br />
    <hr />
    <h3>V-ON Example</h3>
    <button v-on:click="counter += 1">
      Counter
    </button>
    <h3>{{ counter }}</h3>
    <hr />

    <button v-on:click="info('selamat datang')">
      Informasi
    </button>

    <br />
    <hr />
    <h3>V-BIND Example</h3>
    <img v-bind:src="imageSrc" />
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nilai: 75,
      counter: 0,
      imageSrc: "images/logo.png",
    };
  },
  methods: {
    info(text) {
      alert(text);
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <h1>{{ message }} - {{ teks }}</h1>
    <h2>{{ hobby.join(" ") }}</h2>
    <h3>{{ children[3] }}</h3>
    <h3>{{ lecture }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello world",
      teks: "welcome to vuejs",
      age: 33, // integer
      gender: true, // boolean (Pria)
      hobby: ["coding", "sleeping"], // array
      children: {
        // object
        1: "hafid",
        2: "nauval",
        3: "firli",
      },
      lecture: [
        {
          fakultas: "teknik",
          prodi: "informatika",
        },
      ],
    };
  },

  editMessage() {
    this.message = "halo dunia";
  },

  //  hook sesaat setelah objek Vue dan komponennya diinisialisasi.
  // Properti data belum dapat diakses atau digunakan pada hook ini.
  beforeCreate() {
    console.log(`before create: ${this.message}`);
  },

  created() {
    console.log(`created: ${this.message}`);
  },

  beforeMount() {
    console.log("before mount: " + "el = " + this.message.textContent);
  },
  mounted() {
    console.log("mounted: " + "el = " + this.teks.textContent);
  },

  beforeUpdate() {
    console.log(`before update: ${this.message.textContent}`);
  },

  updated() {
    console.log(`updated: ${this.message.textContent}`);
  },
};
</script>

<style></style>

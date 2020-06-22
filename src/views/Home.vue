<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-3">
          <Card name="hafidz" />
        </div>
        <div class="col-md-3">
          <Card name="deddy" />
        </div>
        <div class="col-md-3">
          <Card v-bind:name="nama" />
        </div>
        <div class="col-md-3 mb-2">
          <Card :name="state" />
          <div class="form-group">
            <label for>Input Data</label>
            <input type="text" class="form-control" v-model="state" />
            <button class="btn btn-primary mt-2" v-on:click="klikSaya()">Klik</button>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <ul class="list-group">
          <h3>Daftar Buku</h3>
          <li class="list-group-item active" v-for="book in books" :key="book.id">{{ book.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/Latihan/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      state: "",
      nama: "vuejs the best",
      books: [
        {
          id: 99,
          title: "C++ High Performance",
          description:
            "Write code that scales across CPU registers, multi-core, and machine clusters",
          authors: "Viktor Sehr, Björn Andrist",
          publish_year: 2018,
          price: 100000,
          image: "c++-high-performance.png"
        },
        {
          id: 100,
          title: "Mastering Linux Security and Hardening",
          description:
            "A comprehensive guide to mastering the art of preventing your Linux system from getting compromised",
          authors: "Donald A. Tevault",
          publish_year: 2018,
          price: 125000,
          image: "mastering-linux-security-and-hardening.png"
        },
        {
          id: 101,
          title: "Mastering PostgreSQL 10",
          description:
            "Master the capabilities of PostgreSQL 10 to efficiently manage and maintain your database",
          authors: "Hans-Jürgen Schönig",
          publish_year: 2016,
          price: 90000,
          image: "mastering-postgresql-10.png"
        },
        {
          id: 102,
          title: "Python Programming Blueprints",
          description:
            "How to build useful, real-world applications in the Python programming language",
          authors: "Daniel Furtado, Marcus Pennington",
          publish_year: 2017,
          price: 75000,
          image: "python-programming-blueprints.png"
        }
      ]
    };
  },
  methods: {
    klikSaya: function() {
      if (this.state) {
        alert(`halo ${this.state}`);
      } else {
        alert("input dulu dong");
      }
    }
  }
};
</script>

<style></style>

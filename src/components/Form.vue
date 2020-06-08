<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="">Nama</label>
          <input
            type="text"
            name="title"
            id=""
            class="form-control"
            v-model="title"
            placeholder="Masukkan title"
            aria-describedby="helpId"
          />
        </div>
        <div class="form-group">
          <label for="">Description</label>
          <input
            type="text"
            name="description"
            id=""
            class="form-control"
            v-model="description"
            placeholder="Masukkan description"
            aria-describedby="helpId"
          />
        </div>
      </div>
    </div>
    <div class="row col-md-6">
      <div class="form-group">
        <label for="title">Title: {{ title }}</label>
        <br />
        <label for="description">Description: {{ description }}</label>
      </div>
    </div>

    <hr />
    <h3>Radio Input</h3>

    Paket <br />
    <input type="radio" name="bukuA" value="A" v-model="paket" />
    <label for="bukuA">Buku Laravel</label>
    <br />
    <input type="radio" name="bukuB" value="B" v-model="paket" />
    <label for="bukuB">Buku Vue</label>
    <br />
    <input type="radio" name="bukuAB" value="AB" v-model="paket" />
    <label for="bukuAB">Buku Laravel + Vue</label>

    <br />
    <span>Pilihan paket: {{ paket }}</span>
    <hr />

    <hr />
    <h3>Select</h3>

    <br />
    <select name="category" v-model="category">
      <option disabled value="">Please select one</option>
      <option>Graphics Programming</option>
      <option>Mobile Application Development</option>
      <option>Virtual and Augmented Reality</option>
    </select>

    <br />
    <span>Selected: {{ category }}</span>
    <hr />

    <br />
    Hobi <br />
    <input type="checkbox" name="hobby1" value="nonton" v-model="hobbies" />
    <label for="hobby1">Nonton</label>
    <input type="checkbox" name="hobby2" value="jalan" v-model="hobbies" />
    <label for="hobby2">Jalan</label>
    <input type="checkbox" name="hobby3" value="makan" v-model="hobbies" />
    <label for="hobby3">Makan</label>
    <br />
    <span>Pilihan hobi: {{ hobbies }}</span>
    <hr />
    <select v-model="categories" multiple>
      <option v-for="option in options" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ categories }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      paket: "",
      category: "",
      hobbies: [],
      categories: [],
      options: [
        { text: "Graphics Programming", value: "01" },
        { text: "Mobile Application Development", value: "02" },
        { text: "Virtual and Augmented Reality", value: "03" },
      ],
    };
  },
};
</script>

<style></style>

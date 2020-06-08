<template>
  <div class="container">
    <h1 class="mt-3">Latihan Filtering</h1>
    <div class="row">
      <div class="col-sm-6 mt-3">
        <div class="form-group">
          <label for="keyword">Keyword:</label>
          <input
            type="text"
            v-model="keyword"
            class="form-control"
            placeholder="Masukkan kata kunci"
            aria-describedby="helpId"
          />
        </div>
      </div>
      <div class="col-sm-6 mt-3">
        <ul class="list-group text-primary">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(book, index) of filterBooks"
            :key="index"
          >
            {{ book }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      books: [
        "Laravel Basic",
        "Mastering Linux Security ",
        "Python Programming",
        "MERN Stack",
        "React JS Fundamental",
      ],
    };
  },
  computed: {
    filterBooks() {
      return this.books.filter((book) => {
        return book.includes(this.keyword);
      });
    },
  },
};
</script>

<style></style>

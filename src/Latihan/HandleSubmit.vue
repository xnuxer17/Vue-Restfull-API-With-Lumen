<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-3">
          <form
            @submit.prevent="submitForm($event)"
            action="http://example.com/addproduct"
            method="post"
          >

        <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        </p>

            <label>Title:</label>
            <input type="text" ref="title" v-model="title" />
            <label>Description:</label>
            <textarea v-model="description"></textarea>
            <label>Authors:</label>
            <input type="text" ref="author" v-model="authors" />

            <label>Price:</label>
            <input type="number" v-model.number="price" />
            <label>Categories:</label>
            <select v-model="categories" multiple>
              <option v-for="option in options" :key="option.value">
                {{ option.text }}
              </option>
            </select>
            <label></label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      authors: "",
      price: 0,
      categories: [],
      options: [
        { text: "Graphics Programming", value: "01" },
        { text: "Mobile Application Development", value: "02" },
        { text: "Virtual and Augmented Reality", value: "03" },
      ],
      errors: []
    };
  },
  methods: {
    submitForm(event) {
      this.errors = [];
      if (this.title.length < 3) {
        this.errors.push("Title minimal 3 karakter!");
        this.$refs.title.select();
      }
      if (this.description.length > 500) {
        this.errors.push("Description maximal 500 karakter!");
        this.$refs.description.select();
      }
      if (this.authors.length < 3) {
        this.errors.push("Authors minimal 3 karakter!");
        this.$refs.authors.select();
      }
      if (this.price < 0) {
        this.errors.push("Price tidak boleh minus!");
        this.$refs.price.select();
      }
      if (this.categories.length === 0) {
        this.errors.push("Pilih minimal 1 category!");
        this.$refs.categories.focus();
      }
      if (this.errors.length === 0) {
        alert("Terima kasih telah mengisi data dengan benar!");
        // kirim data ke server
      }

      event.preventDefault();
    },
  },
};
</script>

<style>
form {
  border: 1px solid #ddd;
  padding: 5px;
  width: 225px;
  background: #efefef;
}
label {
  display: block;
  margin-top: 5px;
}
input,
textarea,
select,
option {
  min-width: 200px;
}
</style>

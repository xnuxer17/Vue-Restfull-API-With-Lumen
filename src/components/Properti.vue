<template>
  <div>
    <section>
      <h1 class="mt-5 py-2 px-5 btn btn-danger">{{ counter }}</h1>
      <div class="row">
        <div class="col-2">
          <button class="btn btn-success" @click="increment()">
            +
          </button>
          <button class="btn btn-warning ml-2" @click="decrement()">
            -
          </button>
        </div>
      </div>
      <div class="mt-3">
        <h1>
          Nama: {{ fullname }}
          <br />
          Total: Rp.{{ totalprice }}.00
        </h1>

        <br />
        <h1>{{ price | formatCurrency("USD") }}</h1>
        <h1>{{ price | formatCurrency("IDR") }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      firstName: "Hafidz ",
      lastName: "Masruri",
      price: 50,
      diskon: 30,
    };
  },
  filters: {
    formatCurrency(value, currency) {
      var formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
      });
      return formatter.format(value);
    },
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  computed: {
    fullname: function nama() {
      return this.firstName + this.lastName;
    },
    totalprice: function total() {
      return (this.price * this.diskon) / 100;
    },
  },
};
</script>

<style></style>

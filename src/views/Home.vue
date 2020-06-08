<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-4">
          <Card />
        </div>
        <div class="col-md-4">
          <Card />
        </div>
        <div class="col-md-4">
          <Card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/Latihan/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

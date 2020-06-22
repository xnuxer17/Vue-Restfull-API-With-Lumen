<template>
  <div class="card">
    <img class="card-img-top" src="../images/gamamaru.png" alt />
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-text">{{ desc }}</p>
      <p class="card-text">hello {{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ["name"],
  data() {
    return {
      title: "gamamaru",
      desc: "gamamaru the sannin legendary",
    };
  },
};
</script>

<style></style>

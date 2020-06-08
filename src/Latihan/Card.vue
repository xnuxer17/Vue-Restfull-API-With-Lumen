<template>
  <div class="card">
    <img class="card-img-top" src="../images/gamamaru.png" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-text">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "gamamaru",
      desc: "gamamaru the sannin legendary",
    };
  },
};
</script>

<style></style>

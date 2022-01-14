<template>
  <div class="loading-container">
    <div class="loading">
      <img :src="src" alt="loading" />
    </div>
    <div class="loading__title">{{ title }}</div>
    <div class="loading__message">{{ message }}</div>
  </div>
</template>

<script>
import defaultLoading from "@/assets/Misterious_mist.gif";
export default {
  props: {
    src: {
      default: defaultLoading,
    },
    title: {
      default: " LOADING... ",
    },
    message: {
      default: " thank you for your patience ",
    },
  },
};
</script>

<style scoped>
.loading-container {
  text-align: center;
}
.loading__title,
.loading__message {
  font-family: "Barlow-EL", sans-serif;
}
.loading__title {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
}
.loading__message {
  font-size: 15px;
}
</style>

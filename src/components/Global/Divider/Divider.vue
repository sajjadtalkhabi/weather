<template>
  <div class="main__title">
    <div class="main__title--title" :class="`${!subTitle ? 'withoutSub' : ''}`">
      <h1>{{ title }}</h1>
      <h6 v-if="subTitle">{{ subTitle }}</h6>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "sub-title", "size"],
};
</script>
<style lang="scss" scoped>
.withoutSub h1::after {
  height: 0 !important;
  width: 0 !important;
}
.main__title--title h1 {
  font-family: "Barlow-EL", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 60px;
  font-weight: 700;
  text-align: center;
}
.main__title--title h1::after {
  display: block;
  height: 1px;
  background-color: var(--color-light-gray);
  content: "";
  width: 800px;
  margin: 0 auto;
}

.main__title--title h6 {
  font-size: 14px;
  font-family: "Montserrat-regular";
  color: var(--color-smoky);
  font-weight: 300;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;
}

@media screen and (max-width: 1264px) {
  .main__title--title h1 {
    font-size: 50px;
  }
}
@media screen and (max-width: 990px) {
  .main__title--title h1 {
    font-size: 40px;
  }
  .main__title--title h1::after {
    display: block;
    height: 1px;
    background-color: var(--color-light-gray);
    content: "";
    width: 500px;
    margin: 0 auto;
  }
  .main__title--title h6 {
    font-size: 10px;
    letter-spacing: 6px;
  }
}
@media screen and (max-width: 600px) {
  .main__title--title h1 {
    font-size: 28px;
    letter-spacing: 1px;
  }
  .main__title--title h1::after {
    display: block;
    height: 1px;
    background-color: var(--color-light-gray);
    content: "";
    width: 200px;
    margin: 0 auto;
  }
  .main__title--title h6 {
    font-size: 8px;
    letter-spacing: 2px;
  }
}
</style>

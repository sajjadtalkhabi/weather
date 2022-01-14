<template>
  <div class="section__title">
    <div :class="[{ 'd-flex align-center justify-space-between': hasBtn }]">
      <div
        :class="`hidden-xs-only text-body text-sm-h6 section__title--title-${defaultColor}`"
      >
        {{ title }}
      </div>
      <div v-if="hasBtn" :class="{ 'w-md-100': hasBtn }">
        <template>
          <slot name="header-btn"></slot>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      default: null,
    },
    color: {
      default: "black",
    },
    hasBtn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    defaultColor() {
      return this.color;
    },
  },
};
</script>
<style lang="scss" scoped>
.section__title[class^="section__title--title"],
[class*="section__title--title"] {
  font-size: 23px !important;
  font-family: "Barlow-EL" !important;
  text-transform: uppercase;
  letter-spacing: 10px !important;
  margin-bottom: 0;
}
.section__title::after {
  display: block;
  height: 1px;
  background-color: var(--color-light-gray);
  content: "";
  width: 100%;
}
@media screen and (max-width: 600px) {
  .section__title div {
    font-size: 17px;
    letter-spacing: 2px !important;
  }
  .w-md-100 {
    width: 100% !important;
  }
}
@import "@/Styles/setup/_variables";
@each $defaultColor, $value in $colors {
  .section__title--title-#{ "" + $defaultColor} {
    color: $value !important;
  }
}
</style>

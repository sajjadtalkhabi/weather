<template>
  <div class="we-no-result">
    <img class="Thumbnail" :src="src" />
    <div class="En">{{ textEn }}</div>
  </div>
</template>

<script>
import NoItem from "@/assets/no_item.gif";
export default {
  props: {
    src: { default: NoItem },
    textEn: { default: " NO ITEMS AVAILABLE " },
    themeColor: { default: "black" },
    btnText: { default: "ثبت اولین آیتم" },
    btnIcon: { default: "cancel" },
    modal: { default: null },
    routeName: { default: null },
    hasBtn: { default: true },
  },
  methods: {
    emitClickEvent(e) {
      this.modal ? this.$_openModal(this.modal) : null;
      this.$emit("button-clicked", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.we-no-result {
  text-align: center;
  padding: 10px;
  width: 100%;
}
.we-no-result img {
  width: 250px;
  height: 250px;
  border-radius: 150px;
}
.we-no-result .En {
  direction: ltr;
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
}
</style>

<template>
  <div class="we-no-result">
    <!-- <img class="Thumbnail" :src="$_getPath(src, true)" />
    <div class="Fa">{{ textFa }}</div>
    <div class="En">{{ textEn }}</div>
    <router-link v-if="hasBtn" :to="{ name: routeName }" class="flex lg6 xs12">
      <v-btn
        class="ma-2"
        outlined
        @click.native="emitClickEvent"
        :color="$_color(themeColor)"
      >
        <v-icon left>WMi-{{ btnIcon }}</v-icon> {{ btnText }}
      </v-btn>
    </router-link> -->
    <div class="text-center">There are no items to display</div>
  </div>
</template>

<script>
export default {
  props: {
    src: { default: "/images/Global/Animated/no-result-purple.gif" },
    textFa: { default: " آیتمی برای نمایش وجود ندارد " },
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
  width: 300px;
  height: 300px;
  border-radius: 150px;
}
.we-no-result .Fa {
  font-size: 18px;
}

.we-no-result .En {
  direction: ltr;
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
}
</style>

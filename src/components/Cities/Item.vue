<template>
  <v-card outlined class="w-100 py-3 px-2">
    <v-row>
      <v-col cols="3">
        <div class="d-flex align-center h-100">
          <div style="line-height: 14px">
            <div class="city__title">{{ city.title }}</div>
            <small class="city__sub--title"> {{ city.timezone }}</small>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    city: {
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss" scoped>
.city__title {
  font-family: "montserrat-regular";
  font-size: 20px;
  text-transform: uppercase;
}
.city__sub--title {
  font-size: 10px;
  color: var(--color-smoky);
  font-family: "Montserrat-Light";
}
</style>
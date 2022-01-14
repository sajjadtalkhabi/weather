<template>
  <div :class="{ isLoading: loading }">
    <template v-if="loading">
      <slot name="loading">
        <Loading />
      </slot>
    </template>
    <template v-if="!loading && items.length">
      <slot></slot>
    </template>
    <template v-if="!loading && items.length">
      <slot name="items" :item="item" v-for="(item, i) in items" :index="i" />
    </template>
    <template v-if="!items.length">
      <slot name="items-container"> </slot>
    </template>
    <template v-if="!loading && !isFiltered && !items.length">
      <slot name="no-items">
        <!-- todo : fix -->
        <no-items
          src="/images/Global/Animated/Product.gif"
          title=""
          themeColor="product"
          :hasBtn="false"
        />
      </slot>
    </template>
    <template v-if="!loading && isFiltered && !items.length">
      <slot name="no-results">
        <!-- todo : fix -->
        <no-items
          src="/images/Global/Animated/NoResult.gif"
          textFa=" no items found! "
          textEn=" Sorry, No Items Found! "
          themeColor="product"
          :hasBtn="false"
        />
      </slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "data-iterator",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isFiltered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.isLoading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

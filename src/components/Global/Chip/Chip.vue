<template>
  <v-chip
    :label="label"
    :color="color"
    :text-color="textColor"
    :x-small="xs"
    :small="sm"
    :large="lg"
    :x-large="xl"
    @click="$emit('click')"
    @click:close="$emit('close')"
    :close="close"
  >
    {{ text }}
  </v-chip>
</template>
<script>
export default {
  props: {
    text: {},
    textColor: {},
    color: {},
    xs: Boolean,
    sm: Boolean,
    lg: Boolean,
    xl: Boolean,
    close: Boolean,
    label: {},
  },
};
</script>
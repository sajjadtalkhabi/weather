<template>
  <div>
    <div class="mt-1 mt-md-12">
      <Divider title="cities weather" subTitle="help you to know the weather" />
    </div>
    <div class="mt-6 mt-md-15">
      <v-card outlined>
        <CitiesItems />
      </v-card>
    </div>
  </div>
</template>
<script>
import CitiesItems from "@/components/Cities/Items.vue";
export default {
  components: {
    CitiesItems,
  },
};
</script>
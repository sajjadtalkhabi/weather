<template>
  <div>
    <div>
      <Divider title="cities weather" subTitle="help you to know the weather" />
    </div>
    <div class="mt-15">
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
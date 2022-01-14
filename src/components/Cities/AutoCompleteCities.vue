<template>
  <v-autocomplete
    :items="cities"
    v-model="city"
    :loading="isLoading"
    @keyup="filtercities"
    item-text="title"
    label="search city"
    append-icon="WMi-search"
    class="no-error-msg"
    color="blue lighten-2"
    return-object
    dense
    outlined
    no-filter
  >
  </v-autocomplete>
</template>

<script>
import debouncedFunction from "@/utils/filter/autocompleteFilter.js";
import CityRepository from "@/abstraction/repository/cityRepository";
const repository = new CityRepository();
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return { cities: [], city: this.value, isLoading: false };
  },
  methods: {
    filtercities(event) {
      debouncedFunction(event, async () => {
        let filters = {
          query: {
            type: "like",
            val: event.target.value,
          },
        };
        let params = {
          filters,
        };
        try {
          this.isLoading = true;
          const response = await repository.index(params);
          this.cities = response.data;
        } catch (err) {
          console.log(err, "there was an error loading cities");
        } finally {
          this.isLoading = false;
        }
      });
    },
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.city = this.value;
      },
    },
    city: {
      deep: true,
      immediate: true,
      async handler() {
        if (
          this.city &&
          this.city.id &&
          !this.cities.find((c) => c.id === this.city.id)
        ) {
          this.cities.push(this.city);
        }
        this.$emit("input", this.city);
      },
    },
  },
};
</script>

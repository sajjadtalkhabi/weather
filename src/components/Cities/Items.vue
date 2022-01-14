<template>
  <v-card outlined class="h-100">
    <div class="px-6 mt-4">
      <SectionTitle title="words" has-btn>
        <template #header-btn>
          <div class="mt-n2">
            <AutoCompleteCities v-model="form" />
          </div>
        </template>
      </SectionTitle>
    </div>
    <div class="px-6 py-4">
      <DataIterator :loading="getCityWeatherLoading" :items="getCityWeather">
        <template #loading>
          <Loading />
        </template>
        <template #no-items>
          <NoItems />
        </template>
        <template>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search for selected items"
              single-line
              color="blue lighten-2"
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="cityWeatherItems"
            :search="search"
          >
            <!-- weather tate name -->
            <template v-slot:item.weather_state_name="{ item }">
              {{ item.weather_state_name }}({{ item.weather_state_abbr }})
            </template>
            <!-- wind direction  -->
            <template v-slot:item.wind_direction="{ item }">
              {{ item.wind_direction.toFixed(2) }}
            </template>
            <!-- wind speed -->
            <template v-slot:item.wind_speed="{ item }">
              {{ item.wind_speed.toFixed(2) }}
            </template>
            <!-- min temp -->
            <template v-slot:item.min_temp="{ item }">
              <v-chip color="green" dark>
                {{ item.min_temp.toFixed(2) }}
              </v-chip>
            </template>
            <!-- the temp -->
            <template v-slot:item.the_temp="{ item }">
              <v-chip color="grey darken-1" dark>
                {{ item.the_temp.toFixed(2) }}
              </v-chip>
            </template>
            <!-- max temp -->
            <template v-slot:item.max_temp="{ item }">
              <v-chip color="error" dark>
                {{ item.max_temp.toFixed(2) }}
              </v-chip>
            </template>
            <!-- actions -->
            <template v-slot:item.actions="{ item }">
              <v-dialog
                v-model="dialogDelete"
                max-width="500px"
                :retain-focus="false"
                v-if="dialogDelete"
              >
                <v-card>
                  <v-card-title class="text-h5"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialogDelete = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      color="blue lighten-1"
                      @click="deleteItemConfirm(item)"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-icon color="red" @click="dialogDelete = true">
                mdi-delete
              </v-icon>
            </template>
            <!-- no result  -->
            <template v-slot:no-result> Sorry, No Items Found! </template>
          </v-data-table>
        </template>
      </DataIterator>
    </div>
  </v-card>
</template>
<script>
import toast from "@/utils/toast";
import AutoCompleteCities from "./AutoCompleteCities";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    AutoCompleteCities,
  },
  data: () => ({
    form: {},
    cityWeatherItems: [],
    search: "",
    dialogDelete: false,
    headers: [
      {
        text: "title (city)",
        align: "start",
        value: "title",
      },
      { text: "weather state", value: "weather_state_name" },
      { text: "wind direction compass", value: "wind_direction_compass" },
      { text: "wind direction", value: "wind_direction" },
      { text: "wind speed", value: "wind_speed" },
      { text: "min temp", value: "min_temp" },
      { text: "the temp", value: "the_temp" },
      { text: "max temp", value: "max_temp" },
      { text: "air pressure", value: "air_pressure" },
      { text: "humidity", value: "humidity" },
      { text: "Actions", value: "actions", sortable: false, align: "center" },
    ],
  }),
  watch: {
    "form.city": {
      deep: true,
      immediate: true,
      async handler() {
        if (Object.keys(this.form).length !== 0) {
          await this.addCityWeather(this.form?.woeid);
          //   If it was previously registered
          if (this.cityWeatherItems.find((y) => y.title === this.form.title)) {
            return toast.error("This city has already been selected", "Error");
          }
          this.cityWeatherItems = [];
          this.getCityWeather.map((x) => {
            //   If had no information
            if (x.consolidated_weather_today === undefined) {
              return toast.error(
                "No information was recorded for the city you selected",
                "Error"
              );
            }
            this.cityWeatherItems.unshift({
              ...x.consolidated_weather_today,
              title: x.title,
            });
          });
        }
      },
    },
  },
  computed: {
    ...mapGetters("cityWeather", ["getCityWeatherLoading", "getCityWeather"]),
  },
  methods: {
    ...mapActions("cityWeather", ["addCityWeather"]),
    deleteItemConfirm(item) {
      const index = this.cityWeatherItems.findIndex((x) => x.id === item.id);
      this.$delete(this.cityWeatherItems, index);
      this.dialogDelete = false;
    },
  },
};
</script>
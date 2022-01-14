import Vue from "vue";
import toast from "@/utils/toast";
export default {
    ADD_CITY_WEATHER(state, payload) {
        if (payload.consolidated_weather_today !== undefined) {
            return Vue.set(state.cityWeather, state.cityWeather.length, payload);
        }
        return toast.error(
            "No information was recorded for the city you selected",
            "Error"
        );
    },
    DELETE_CITY_WEATHER(state, payload) {
        const index = state.cityWeather.findIndex((x) => x.woeid === payload);
        Vue.delete(state.cityWeather, index);
    },
    SET_LOADING_WEATHER(state, payload) {
        Vue.set(state, 'loading', payload);
    },
};

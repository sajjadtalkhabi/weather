import Vue from "vue";
export default {
    ADD_CITY_WEATHER(state, payload) {
        Vue.set(state.cityWeather, state.cityWeather.length, payload);
    },
    DELETE_CITY_WEATHER(state, payload) {
        const index = state.cityWeather.findIndex((x) => x.woeid === payload);
        Vue.delete(state.cityWeather, index);
        console.log(state.cityWeather);
    },
    SET_LOADING_WEATHER(state, payload) {
        Vue.set(state, 'loading', payload);
    },
};

import Vue from "vue";
export default {
    ADD_CITY_WEATHER(state, payload) {
        Vue.set(state.cityWeather, state.cityWeather.length, payload);
    },
    SET_LOADING_WEATHER(state, payload) {
        Vue.set(state, 'loading', payload);
    },
};

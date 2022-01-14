import CityWeatherRepository from "@/abstraction/repository/cityWeatherRepository";
let repository = new CityWeatherRepository();
export default {
    async addCityWeather({ commit }, woeid) {
        try {
            commit("SET_LOADING_WEATHER", true);
            const resource = await repository.index(woeid);
            commit("ADD_CITY_WEATHER", resource);
        } catch (e) {
            return e;
        } finally {
            commit("SET_LOADING_WEATHER", false);
        }

    },
}
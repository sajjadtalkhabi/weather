import axios from "axios";
import url from "@/router/url";
import {
    getJson,
} from "../resources/cityWeatherResource";
export default class CityWeatherRepository {
    async index(woeid) {
        let response = await axios.get(url("showCityWeather", { woeid }));
        if (response.status === 200) {
            return getJson(response.data);
        }
    }
}
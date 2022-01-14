import axios from "axios";
import url from "@/router/url";
import {
    getArray,
    setQuery,
} from "../resources/cityResource";
export default class CityRepository {
    async index(data) {
        let params = setQuery(data);
        let response = await axios.get(url("indexCity"), { params });
        if (response.status === 200) {
            return getArray(response.data);
        }
    }
}
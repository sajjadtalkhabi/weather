import { SetQueriesObject } from "@/utils/setQueriesObject";
export const getJson = (data) => ({
    title: data.title,
    location_type: data.location_type,
    woeid: data.woeid,
    latt_long: data.latt_long,
});
export const getArray = (data) => {
    data = data.map((city) => getJson(city));
    return { data };
};
export const setQuery = (data) => {
    return SetQueriesObject(data);
};
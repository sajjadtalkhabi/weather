export const getJson = (data) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return {
        consolidated_weather: data.consolidated_weather,
        consolidated_weather_today: data.consolidated_weather.find(item => item.applicable_date == today),
        time: data.time,
        sun_set: data.sun_set,
        sun_rise: data.sun_rise,
        timezone_name: data.timezone_name,
        parent: data.parent,
        sources: data.sources,
        title: data.title,
        location_type: data.location_type,
        woeid: data.woeid,
        latt_long: data.latt_long,
        timezone: data.timezone,
    }
};

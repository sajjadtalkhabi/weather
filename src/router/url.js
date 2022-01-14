import { urlGenerator } from "@/utils/urlGenerator";

const urls = {
  //  city
  indexCity: 'search',
  // city weather
  showCityWeather: ':woeid'
};

export default urlGenerator(urls);

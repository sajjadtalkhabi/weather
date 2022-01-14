import Vue from 'vue';
import store from './store'
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './utils/GlobalComponents';
import "./styles/global.scss";
import ApiService from '@/utils/axios/api';
ApiService.init('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/');

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

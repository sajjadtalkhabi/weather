// import
import Vue from 'vue';
import '../styles/icon/fontello-b9d25c07/css/fontello.css';
import Header from '../components/Global/Header/Header.vue';
import Chip from "../components/Global/Chip/Chip.vue";
import Loading from "../components/Global/Misc/Loading";
import NoItems from "../components/Global/Misc/NoItems";
import DataIterator from "../components/Global/Input/DataIterator.vue";
import Divider from '../components/Global/Divider/Divider.vue';
import SectionTitle from '../components/Global/Section/SectionTitle.vue';



// component
Vue.component('SiteHeader', Header);
Vue.component('Chip', Chip);
Vue.component('Loading', Loading);
Vue.component('NoItems', NoItems);
Vue.component('DataIterator', DataIterator);
Vue.component('Divider', Divider);
Vue.component('SectionTitle', SectionTitle)


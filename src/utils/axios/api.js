import axios from 'axios'
const ApiService = {

    init(baseURL = null) {
        if (baseURL) {
            axios.defaults.headers.common["Access-Controll-Allow-Origin"] = '*';
            axios.defaults.baseURL = baseURL;
        } else if (process.env.MIX_PUSHER_APP_API) {
            axios.defaults.baseURL = process.env.MIX_PUSHER_APP_API;
        }
    },
};
export default ApiService;

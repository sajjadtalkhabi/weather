import axios from "axios";
import toast from "../toast";
import Vue from "vue";

function errorResponseHandler(error) {
    // check for errorHandle config
    if (
        Object.prototype.hasOwnProperty.call(error.config, "errorHandle") &&
        error.config.errorHandle === false
    ) {
        return Promise.reject(error);
    }
    // if has response show the error
    if (error.response) {
        if (error.response.status === 422) {
            if (typeof error.response.data.errors !== 'undefined') {
                for (const key in error.response.data.errors) {
                    if (Object.prototype.hasOwnProperty.call(error.response.data.errors, key)) {
                        toast.error(error.response.data.errors[key], 'Error');
                    }
                }
            }
        } else if (error.response.status === 429) {
            toast.error('too many requests.', 'Error');
        } else if (error.response.status === 500) {
            toast.error('Server Error', 'Error');
        }
    }
    return Promise.reject(error);
}
function successHandler(response) {
    if (response.status === 200 || response.status === 201) {
        if (typeof response.data.message !== 'undefined' && typeof response.data.message.content !== 'undefined') {
            toast.success(response.data.message.content, response.data.message.title || 'Success');
        }
    }
    return response;
}

// apply interceptor on response
axios.interceptors.response.use(successHandler, errorResponseHandler);
Vue.prototype.$axios = axios;

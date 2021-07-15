import axios from 'axios';
// import * as BEERAPP from '../utils/index';
// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        config.baseURL = `${process.env.REACT_APP_API_URL}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


const exportedObject = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};

export default exportedObject;

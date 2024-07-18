import axios from 'axios';

const BASE_URL = '';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

export default axiosInstance;

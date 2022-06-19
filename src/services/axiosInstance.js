import axios from 'axios';
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
axios.defaults.baseURL = 'http://localhost:4000';
let axiosInstance = axios;
export default axiosInstance;

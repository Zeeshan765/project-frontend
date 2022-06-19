import axiosInstance from './axiosInstance';

class APIService {
  getProducts = (page = 1, perPage = 8) => this.get('/api/products/pagination?page=' + page + '&perPage=' + perPage);
  getComponents = () => this.get('/api/components' );
  getBuild = () => this.get('/api/products/build');
  getComponentspage = (page = 1, perPage = 8) => this.get('/api/components/simple?page=' + page + '&perPage=' + perPage);
  get = (url) => axiosInstance.get(url);
  post = (url, data) => axiosInstance.post(url, data);
  delete = (url) => axiosInstance.delete(url);
  patch = (url) => axiosInstance.patch(url);
  put = (url, data) => axiosInstance.put(url, data);

  // Check User Log or not
  isLoggedIn = () => {
    return localStorage.getItem('token') ? true : false;
  };
}

let apiService = new APIService();
export default apiService;

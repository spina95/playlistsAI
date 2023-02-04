import axios from 'axios';

const ApiService = {
  init() {
    axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
    axios.defaults.headers = {
      'Content-Type': 'application/json',
    }
  },

  setHeader(token) {
    axios.defaults.headers = {
      'Authorization': `Token ${token}`
    }
  },

  query(resource, params) {
    return axios.get(resource, {params: params}).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;
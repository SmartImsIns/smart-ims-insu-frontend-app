import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

Api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer MOATjhc9gBdfAY2UHLncrgres3f5R5Qs";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      alert("You are not authorized");
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export const Get = Api.get;
export const Post = Api.post;

export default Api;

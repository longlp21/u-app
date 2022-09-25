import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: `http://localhost:5000`,
  headers: {
    "content-type": "application/json",
    // "authorization": `Bearer ${localStorage.getItem("token")}`

  },

  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`; // eslint-disable-line no-param-reassign
    }
    return config;
  });
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  },
);
export default axiosClient;

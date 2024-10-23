import store from "store/store";
import axios from "axios";

const client = axios.create({
  //baseURL: `${Config.BASE_URL}/api`,
  baseURL: "http://192.168.1.23:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const onSuccess = function (response) {
  // Return the data from the response
  return response.data;
};

const onError = function (error) {
  // Handle the error response
  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
  }
  return Promise.reject({
    errMsg: !error?.response ? "Network Issue!" : error.response.data,
    status: error?.response?.status || "not status",
  });
};

client.interceptors.response.use(onSuccess, onError);

client.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    console.log("state", state);

    const token = state.auth.userToken;
    console.log("userTokenClient", token);

    config.headers["x-auth-token"] = `${token}`;
    config.headers.Authorization = "user";

    return config;
  },
  (error) => Promise.reject(error)
);

export default client;

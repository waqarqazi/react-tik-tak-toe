import axios from "utils/axios";
import { API_URLS } from "./url-paths";

const login = (obj) => {
  return axios.post(API_URLS.LOGIN, obj);
};

const signup = (obj) => {
  return axios.post(API_URLS.SIGNUP, obj);
};

const validateOtp = (obj) => {
  return axios.post(API_URLS.VALIDATE_OTP, obj);
};
const forgotPassword = (obj) => {
  return axios.post(API_URLS.INIT_PWD, obj);
};
const changePassword = (obj) => {
  return axios.post(API_URLS.CHNG_PWD, obj);
};
export const authService = {
  login,
  signup,
  validateOtp,
  forgotPassword,
  changePassword,
};

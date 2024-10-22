import axios from "utils/axios";
import { API_URLS } from "./url-paths";

export const addUser = async (obj) => {
  let url = `${API_URLS.GET_ALL_DEPARTMENT_DATA}`; //need to change url
  return axios.post(url, obj);
};
export const getAllOfficer = async (obj) => {
  let url = `${API_URLS.GET_OFFICER_LIST}`; //need to change url
  return axios.post(url, obj);
};
export const getOfficerById = async (obj) => {
  let url = `${API_URLS.GET_OFFICER_BY_ID}`; //need to change url
  return axios.post(url, obj);
};
export const addOfficer = async (obj) => {
  let url = `${API_URLS.ADD_OFFICER}`; //need to change url
  return axios.post(url, obj);
};
export const upDateOfficer = async (obj) => {
  let url = `${API_URLS.UPDATE_OFFICER_OFFICER}`; //need to change url
  return axios.post(url, obj);
};

export const userService = {
  addUser,
};

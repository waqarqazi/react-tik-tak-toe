import { API_URLS } from "./url-paths";
import axios from "utils/axios";

export const getTasks = async (obj) => {
  console.log("obj", obj);
  let url = `${API_URLS.GET_TASKS}`;
  return axios.post(url, obj);
};
export const getIntel = async (obj) => {
  console.log("obj", obj);
  let url = `${API_URLS.GET_INTELS}`;
  return axios.post(url, obj);
};

export const createIntel = async (obj) => {
  let url = `${API_URLS.CREATE_INTEL}`;
  return axios.post(url, obj);
};
export const searchIntelById = async (obj) => {
  let url = `${API_URLS.SEARCH_INTEL_BY_ID}`;
  return axios.post(url, obj);
};
export const amendIntel = async (obj) => {
  let url = `${API_URLS.AMEND_INTEL}`;
  return axios.post(url, obj);
};
export const approveIntel = async (obj) => {
  let url = `${API_URLS.INTEL_APPROVE}`;
  return axios.post(url, obj);
};
export const searchAllocateOfcrExisting = async (obj) => {
  let url = `${API_URLS.SEARCH_ALLOC_OFF_INTEL}`;
  return axios.post(url, obj);
};
export const allocateOfficerPermission = async (obj) => {
  let url = `${API_URLS.ALLOC_OFF_PER_INTEL}`;
  return axios.post(url, obj);
};

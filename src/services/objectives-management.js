import { API_URLS } from "./url-paths";
import axios from "utils/axios";

export const getAllObjectives = async (obj) => {
  let url = `${API_URLS.SEARCH_ALL_OBJECTIVES}`;
  return axios.post(url, obj);
};
export const createObjective = async (obj) => {
  let url = `${API_URLS.CREATE_OBJECTIVES}`;
  return axios.post(url, obj);
};
export const searchObjectById = async (obj) => {
  let url = `${API_URLS.SEARCH_OBJ_BY_ID}`;
  return axios.post(url, obj);
};
export const amendObjective = async (obj) => {
  let url = `${API_URLS.AMEND_OBJ}`;
  return axios.post(url, obj);
};
export const searchAllocateOfcrExisting = async (obj) => {
  let url = `${API_URLS.SEARCH_ALLOC_OFF_OBJ}`;
  return axios.post(url, obj);
};
export const allocateOfficerPermission = async (obj) => {
  let url = `${API_URLS.ALLOC_OFF_PER_OBJ}`;
  return axios.post(url, obj);
};

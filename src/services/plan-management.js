import { API_URLS } from './url-paths';
import axios from 'utils/axios';

export const addUserStrategy = async (obj) => {
  let url = `${API_URLS.ADD_USER_STRAT}`;
  return axios.post(url, obj);
};
export const startBot = async (obj) => {
  let url = `${API_URLS.START_BOT}`;
  return axios.post(url, obj);
};
export const getAllUserStratiges = async () => {
  let url = `${API_URLS.GET_ALL_STRATAGIES}`;
  return axios.get(url);
};
export const getAllBots = async () => {
  let url = `${API_URLS.GET_ALL_BOTS}`;
  return axios.get(url);
};
export const getPlanById = async (obj) => {
  let url = `${API_URLS.SEARCH_PLAN_BY_ID}`;
  return axios.post(url, obj);
};
export const approvePlan = async (obj) => {
  let url = `${API_URLS.APPROVE_PLAN}`;
  return axios.post(url, obj);
};
export const approveObject = async (obj) => {
  let url = `${API_URLS.OBJ_APPROVE}`;
  return axios.post(url, obj);
};
export const assignOfficerBasic = async (obj) => {
  let url = `${API_URLS.SEARCH_OFF_BASIC}`;
  return axios.post(url, obj);
};
export const searchAllocateOfcrExisting = async (obj) => {
  let url = `${API_URLS.SEARCH_ALLOC_OFF}`;
  return axios.post(url, obj);
};
export const allocateOfficerPermission = async (obj) => {
  let url = `${API_URLS.ALLOC_OFF_PER}`;
  return axios.post(url, obj);
};
export const editPlan = async (obj) => {
  let url = `${API_URLS.AMEND_PLAN}`;
  return axios.post(url, obj);
};

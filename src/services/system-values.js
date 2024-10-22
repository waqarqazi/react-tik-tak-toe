import axios from 'utils/axios';
import { API_URLS } from './url-paths';

const getSystemPracticeGroups = (obj) => {
  return axios.get(API_URLS.GET_SYSTEM_PRACTICE_GROUPS, obj);
};
const deleteSystemPracticeGroups = (id) => {
  return axios.delete(`${API_URLS.DELETE_SYSTEM_PRACTICE_GROUPS}/${id}`);
};

const addSystemPracticeGroups = (obj, id) => {
  let url = API_URLS.ADD_SYSTEM_PRACTICE_GROUPS;
  if (id) url = `${API_URLS.ADD_SYSTEM_PRACTICE_GROUPS}/${id}`;
  return axios[id ? 'put' : 'post'](url, obj);
};

const getSystemLocations = (obj) => {
  return axios.get(API_URLS.GET_SYSTEM_LOCATIONS, obj);
};
const addSystemLocations = (obj, id) => {
  let url = API_URLS.ADD_SYSTEM_LOCATIONS;
  if (id) url = `${API_URLS.ADD_SYSTEM_LOCATIONS}/${id}`;
  return axios[id ? 'put' : 'post'](url, obj);
};

const deleteSystemLocation = (id) => {
  return axios.delete(`${API_URLS.DELETE_SYSTEM_LOCATIONS}/${id}`);
};

const getSystemBarStates = (obj) => {
  return axios.get(API_URLS.GET_SYSTEM_BAR_STATES, obj);
};

const addSystemBarStates = (obj, id) => {
  let url = API_URLS.ADD_SYSTEM_BAR_STATES;
  if (id) url = `${API_URLS.ADD_SYSTEM_BAR_STATES}/${id}`;
  return axios[id ? 'put' : 'post'](url, obj);
};
const deleteSystemBarStates = (id) => {
  return axios.delete(`${API_URLS.DELETE_SYSTEM_BAR_STATES}/${id}`);
};

const getSystemWeights = (obj) => {
  return axios.get(API_URLS.GET_SYSTEM_WEIGHTS, obj);
};
const editAlgoWeights = (id, obj) => {
  let url = API_URLS.EDIT_ALGO_WEIGHT;
  if (id) url = `${API_URLS.EDIT_ALGO_WEIGHT}/${id}`;
  return axios[id ? 'put' : 'post'](url, obj);
};

export const systemValuesService = {
  getSystemPracticeGroups,
  addSystemPracticeGroups,
  getSystemLocations,
  addSystemLocations,
  getSystemBarStates,
  addSystemBarStates,
  getSystemWeights,
  deleteSystemLocation,
  deleteSystemBarStates,
  editAlgoWeights,
  deleteSystemPracticeGroups,
};

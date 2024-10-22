import { API_URLS } from "./url-paths";
import axios from "utils/axios";

export const getTasks = async (obj) => {
  console.log("obj", obj);
  let url = `${API_URLS.GET_TASKS}`;
  return axios.post(url, obj);
};

export const getTaskDashboard = async (obj) => {
  let url = `${API_URLS.GET_TASKS_DASHBOARD}`;
  return axios.post(url, obj);
};
export const createTask = async (obj) => {
  let url = `${API_URLS.CREATE_TASK}`;
  return axios.post(url, obj);
};
export const amendTask = async (obj) => {
  let url = `${API_URLS.AMEND_TASK}`;
  return axios.post(url, obj);
};
export const addInvestigationTeam = async (obj) => {
  let url = `${API_URLS.ADD_TEAM}`;
  return axios.post(url, obj);
};
export const addMembers = async (obj) => {
  let url = `${API_URLS.ADD_MEMBER}`;
  return axios.post(url, obj);
};
export const addSuspect = async (obj) => {
  let url = `${API_URLS.ADD_SUSPECT}`;
  return axios.post(url, obj);
};
export const addWitness = async (obj) => {
  let url = `${API_URLS.ADD_WITNESS}`;
  return axios.post(url, obj);
};
export const addStatement = async (obj) => {
  let url = `${API_URLS.ADD_STATEMENT}`;
  return axios.post(url, obj);
};
export const addStatementWitness = async (obj) => {
  let url = `${API_URLS.ADD_WITNESS_STATEMENT}`;
  return axios.post(url, obj);
};
export const getStatementWitness = async (obj) => {
  let url = `${API_URLS.GET_STATEMENT_WITNESS}`;
  return axios.post(url, obj);
};
export const getStatement = async (obj) => {
  let url = `${API_URLS.GET_STATEMENT}`;
  return axios.post(url, obj);
};
export const updateMembers = async (obj) => {
  let url = `${API_URLS.UPDATE_MEMBER}`;
  return axios.post(url, obj);
};

export const searchTaskById = async (obj) => {
  let url = `${API_URLS.SEARCH_TASKS_BY_ID}`;
  return axios.post(url, obj);
};
export const getMemberListById = async (obj) => {
  let url = `${API_URLS.GET_MEMBER_BY_LIST_ID}`;
  return axios.post(url, obj);
};

export const searchAllocateOfcrExisting = async (obj) => {
  let url = `${API_URLS.SEARCH_ALLOC_OFF_TASK}`;
  return axios.post(url, obj);
};
export const allocateOfficerPermission = async (obj) => {
  let url = `${API_URLS.ALLOC_OFF_PER_TASK}`;
  return axios.post(url, obj);
};

export const addEvidence = async (obj) => {
  let url = `${API_URLS.ADD_EVIDENCE}`;
  return axios.post(url, obj);
};

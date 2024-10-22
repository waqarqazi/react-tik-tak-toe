import { API_URLS } from "./url-paths";
import axios from "utils/axios";

export const getCountryList = async (obj) => {
  console.log("obj", obj);
  let url = `${API_URLS.GET_ALL_COUNTRY_DATA}`;
  return axios.post(url, obj);
};
export const getCountryById = async (obj) => {
  let url = `${API_URLS.GET_COUNTRY_BY_ID}`;
  return axios.post(url, obj);
};
export const createCountry = async (obj) => {
  let url = `${API_URLS.CREATE_COUNTRY}`;
  return axios.post(url, obj);
};
export const getDistrictById = async (obj) => {
  let url = `${API_URLS.GET_DISTRICT_BY_ID}`;
  return axios.post(url, obj);
};
export const getDistrictList = async (obj) => {
  let url = `${API_URLS.GET_ALL_DISTRICT_DATA}`;
  return axios.post(url, obj);
};
export const addDistrict = async (obj) => {
  let url = `${API_URLS.ADD_DISTRICT}`;
  return axios.post(url, obj);
};
export const getOrganizationList = async (obj) => {
  let url = `${API_URLS.GET_ORGANIZATION_LIST}`;
  return axios.post(url, obj);
};
export const getOrganizationById = async (obj) => {
  let url = `${API_URLS.GET_ORGANIZATION_BY_ID}`;
  return axios.post(url, obj);
};
export const addOrganization = async (obj) => {
  let url = `${API_URLS.ADD_ORGANIZATION}`;
  return axios.post(url, obj);
};
export const getTeamList = async (obj) => {
  let url = `${API_URLS.GET_ALL_TEAM_DATA}`;
  return axios.post(url, obj);
};
export const addTeam = async (obj) => {
  let url = `${API_URLS.ADD_TEAM}`;
  return axios.post(url, obj);
};
export const getTeamById = async (obj) => {
  let url = `${API_URLS.GET_TEAM_BY_ID}`;
  return axios.post(url, obj);
};
export const getDepartmentList = async (obj) => {
  let url = `${API_URLS.GET_ALL_DEPARTMENT_DATA}`;
  return axios.post(url, obj);
};
export const getDepartmentById = async (obj) => {
  let url = `${API_URLS.GET_DEPARTMENT_ID}`;
  return axios.post(url, obj);
};
export const addDepartment = async (obj) => {
  let url = `${API_URLS.ADD_DEPT}`;
  return axios.post(url, obj);
};
export const getOrganizationDetails = async (obj) => {
  let url = `${API_URLS.GET_ORGANIZATION_DETAILS_LIST}`;
  return axios.post(url, obj);
};
export const addOrganizationDetails = async (obj) => {
  let url = `${API_URLS.ADD_ORGANIZATION_DETAILS_LIST}`;
  return axios.post(url, obj);
};
export const getOrganizationDetailsById = async (obj) => {
  let url = `${API_URLS.GET_SINGLE_ORGANIZATION_DETAILS_BY_ID}`;
  return axios.post(url, obj);
};

//Groups
export const getGroupList = async (obj) => {
  let url = `${API_URLS.GET_GROUP_LIST}`;
  return axios.post(url, obj);
};
export const addGroup = async (obj) => {
  let url = `${API_URLS.ADD_GROUP}`;
  return axios.post(url, obj);
};
export const getGroupById = async (obj) => {
  let url = `${API_URLS.GET_GROUP_BY_ID}`;
  return axios.post(url, obj);
};
export const editGroup = async (obj) => {
  let url = `${API_URLS.UPDATE_GROUP}`;
  return axios.post(url, obj);
};
//ROLES
export const getRolesList = async (obj) => {
  let url = `${API_URLS.GET_ROLES_LIST}`;
  return axios.post(url, obj);
};
export const getRoleById = async (obj) => {
  let url = `${API_URLS.GET_ROLE_BY_ID}`;
  return axios.post(url, obj);
};
export const addRole = async (obj) => {
  let url = `${API_URLS.ADD_ROLE}`;
  return axios.post(url, obj);
};

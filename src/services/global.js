import { API_URLS } from "./url-paths";
import axios from "utils/axios";

export const downloadFile = async (obj) => {
  let url = `${API_URLS.DOWNLOAD_FILE}`;
  return axios.post(url, obj);
};
export const downloadFileDetails = async (docRef) => {
  let url = `${API_URLS.DOWNLOAD_FILE_DETAILS + docRef}`;
  return axios.get(url);
};
export const viewFile = async (obj) => {
  let url = `${API_URLS.VIEW_FILE}`;
  return axios.post(url, obj);
};

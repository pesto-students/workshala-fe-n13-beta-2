import axios from "axios";
import { BASE_API_URL, HEADER } from "../constants";

export function getAppsList(data) {
  var url = BASE_API_URL + "/functions/getApplnInfoByUserId";

  return axios
    .post(url, data, { headers: HEADER })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      throw error;
    });
}

export function updateApplicationsApi(arg) {
  const ObjectId = arg.objectId;
  const payload = arg.data;

  var url = BASE_API_URL + "/classes/ApplicationInfo/" + ObjectId;

  const custHeader = {
    ...HEADER,
    "Content-Type": "application/json",
  };

  return axios
    .put(url, payload, { headers: custHeader })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

export function getApplicationsApi(data) {
  var url = BASE_API_URL + "/classes/ApplicationInfo?where=";

  url += JSON.stringify(data);

  return axios
    .get(url, { headers: HEADER })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

export function postApplicationApi(data) {
  var url = BASE_API_URL + "/classes/ApplicationInfo";

  return axios
    .post(url, data, { headers: HEADER })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

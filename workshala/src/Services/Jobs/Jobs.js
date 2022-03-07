import axios from "axios";
import { BASE_API_URL, HEADER } from "../constants";

export function getJobsList() {
  var url = BASE_API_URL + "/functions/getJobInfoById";
  const params = {};
  return new Promise((resolve) => {
    axios
      .post(url, params, { headers: HEADER })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        throw error;
      });
  });
}

export function postAJob(data) {
  var url = BASE_API_URL + "/functions/postJob";

  return axios
    .post(url, data, { headers: HEADER })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

export function searchJobsApi(data) {
  var url = BASE_API_URL + "/classes/JobInfo?where=";

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

export function deletePostedJobAPI(data) {
  var url = BASE_API_URL + "/classes/JobInfo/" + data;

  return axios
    .delete(url, { headers: HEADER })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

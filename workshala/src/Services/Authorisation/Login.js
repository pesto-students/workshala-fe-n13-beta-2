import axios from "axios";
import { BASE_API_URL, HEADER } from "../constants";

export function getUser(data) {
  if (data !== undefined && data.data !== undefined) {
    const userId = data.data.objectId;

    var url = BASE_API_URL + "/users/" + userId;

    return axios
      .get(url, { headers: HEADER })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export function getCurrentUser(data) {
  var url = BASE_API_URL + "/users/me";

  if (data !== undefined && data.data !== undefined) {
    const sessionToken = data.data.sessionToken;

    const custHeader = {
      ...HEADER,
      "X-Parse-Session-Token": sessionToken,
    };

    return new Promise((resolve) => {
      axios
        .get(url, { headers: custHeader })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          throw error;
        });
    });
  }
}

export function login(data) {
  const config = {
    headers: HEADER,
    params: data,
  };

  return axios
    .get(BASE_API_URL + "/login", config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

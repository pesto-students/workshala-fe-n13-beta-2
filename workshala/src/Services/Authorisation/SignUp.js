import axios from "axios";
import { BASE_API_URL, HEADER } from "../constants";

export function register(data) {
  const userPayload = {
    ...data,
    username: data["email"],
  };

  const userHeader = {
    ...HEADER,
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json",
  };

  return axios
    .post(BASE_API_URL + "/users", userPayload, { headers: userHeader })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

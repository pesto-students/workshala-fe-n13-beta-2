import { type } from "../reducers/types";

export function getUser(data) {
  return {
    type: type.USER_INFO_REQUESTED,
    payload: data,
  };
}

export function updateUserInfo(data) {
  return {
    type: type.UPDATE_USER_INFO,
    payload: data,
  };
}

export function fetchProfile(data) {
  return {
    type: type.UPDATED_PROFILE_REQUESTED,
    payload: data,
  };
}

export function logOut(data) {
  return {
    type: type.USER_LOG_OUT,
    payload: data,
  };
}

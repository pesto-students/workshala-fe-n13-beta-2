import {type} from '../reducers/types';

export function postSignUp(data) {
  return {
    type: type.POST_USER_SIGNUP_REQUESTED,
    payload: data,
  };
}

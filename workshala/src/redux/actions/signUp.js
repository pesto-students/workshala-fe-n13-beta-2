import {type} from '../reducers/types';

export default function signUp(data) {
    return {
      type: type.USER_SIGNUP_REQUESTED,
      payload: data
    };
}
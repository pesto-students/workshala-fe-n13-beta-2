import {type} from '../reducers/types';

export default function signIn(data) {
    return {
      type: type.USER_SIGNIN_REQUESTED,
      payload: data
    };
}
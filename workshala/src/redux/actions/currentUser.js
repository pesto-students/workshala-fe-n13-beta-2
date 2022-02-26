import {type} from '../reducers/types';

export default function getCurrentUser(data)  {
  return {
    type: type.CURRENT_USER_REQUESTED,
    payload: data
  };
}
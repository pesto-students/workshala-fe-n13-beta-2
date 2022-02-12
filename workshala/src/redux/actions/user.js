import {type} from '../reducers/types';

export default function getUser(data)  {
  return {
    type: type.USER_INFO_REQUESTED,
    payload: data
  };
}
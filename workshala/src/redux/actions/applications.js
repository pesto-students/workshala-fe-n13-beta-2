import {type} from '../reducers/types';

export default function getApplications(data)  {
  return {
    type: type.APPLICATIONS_LIST_REQUESTED,
    payload: data
  };
}
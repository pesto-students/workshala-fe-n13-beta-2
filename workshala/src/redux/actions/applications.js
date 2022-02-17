import {type} from '../reducers/types';

export function getApplications(data)  {
  return {
    type: type.APPLICATIONS_LIST_REQUESTED,
    payload: data
  };
}

export function postApplication(data)  {
  return {
    type: type.POST_APPLICATION_REQUESTED,
    payload: data
  };
}
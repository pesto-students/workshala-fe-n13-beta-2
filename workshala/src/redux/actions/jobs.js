import {type} from '../reducers/types';

export default function getJobsList(data)  {
  return {
    type: type.JOBS_LIST_REQUESTED,
    payload: data
  };
}
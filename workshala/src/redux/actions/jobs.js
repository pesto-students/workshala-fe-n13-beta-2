import {type} from '../reducers/types';

export function getJobsList(data)  {
  return {
    type: type.JOBS_LIST_REQUESTED,
    payload: data
  };
}

export function getJobsListByJobId(data)  {
  return {
    type: type.JOBS_LIST_BY_ID_REQUESTED,
    payload: data
  };
}

export function searchJobs(data)  {
  return {
    type: type.SEARCH_JOBS_REQUESTED,
    payload: data
  };
}

export function fetchRecruiterPostedJobs(data) {
  return {
    type: type.RECRUITER_POSTED_JOBS_REQUESTED,
    payload: data,
  };
}

export function postJob(data) {
  return {
    type: type.POST_JOB_REQUESTED,
    payload: data,
  };
}
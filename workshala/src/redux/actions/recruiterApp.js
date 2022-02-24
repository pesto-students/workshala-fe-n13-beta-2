import { type } from "../reducers/types";

export function getRecruiterApplications(data) {
  return {
    type: type.RECRUITER_APPLICATIONS_LIST_REQUESTED,
    payload: data,
  };
}

export function getActiveJobsListByRecruiterId(data) {
  return {
    type: type.JOBS_LIST_BY_RECRUITER_ID_REQUESTED,
    payload: data,
  };
}

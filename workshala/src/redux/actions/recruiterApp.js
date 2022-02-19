import { type } from "../reducers/types";

export function getRecruiterApplications(data) {
  return {
    type: type.RECRUITER_APPLICATIONS_LIST_REQUESTED,
    payload: data,
  };
}

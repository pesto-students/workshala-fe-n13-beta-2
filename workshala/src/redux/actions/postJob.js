import { type } from "../reducers/types";

export default function postJob(data) {
  return {
    type: type.POST_JOB_REQUESTED,
    payload: data,
  };
}

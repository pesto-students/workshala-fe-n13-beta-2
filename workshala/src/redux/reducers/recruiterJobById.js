import { type } from "./types";

const initialState = {
  recruiterJobById: [],
  loading: true,
  error: null,
  status: false,
};

export default function recruiterJobById(state = initialState, action) {
  switch (action.type) {
    case type.JOBS_LIST_BY_RECRUITER_ID_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.JOBS_LIST_BY_RECRUITER_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        recruiterJobById: action.recruiterJobById,
        status: true,
      };
    case type.JOBS_LIST_BY_RECRUITER_ID_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}

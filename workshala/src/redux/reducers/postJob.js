import { type } from "./types";

const initialState = {
  postJob: [],
  loading: false,
  error: null,
  status: false,
};

export default function postJob(state = initialState, action) {
  switch (action.type) {
    case type.POST_JOB_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.POST_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        postJob: action.postJob,
        status: true,
      };
    case type.POST_JOB_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
        status: false,
      };
    default:
      return state;
  }
}

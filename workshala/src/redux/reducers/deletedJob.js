import { type } from "./types";

const initialState = {
  deletedJob: [],
  loading: true,
  error: null,
  status: false,
};

export default function deletedJob(state = initialState, action) {
  switch (action.type) {
    case type.DELETE_POSTED_JOB_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_POSTED_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedJob: action.deletedJob,
        status: true,
      };
    case type.DELETE_POSTED_JOB_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}

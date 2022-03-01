import { type } from "./types";

const initialState = {
  applications: [],
  loading: true,
  error: null,
  status: false,
};

export default function applications(state = initialState, action) {
  switch (action.type) {
    case type.UPDATE_APPLICATION_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.FETCH_APPLICATIONS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.APPLICATIONS_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.FETCH_APPLICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        applications: action.applications,
        status: true,
      };
    case type.UPDATE_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        applications: action.applications,
        status: true,
      };
    case type.APPLICATIONS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        applications: action.applications,
        status: true,
      };
    case type.FETCH_APPLICATIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.APPLICATIONS_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.UPDATE_APPLICATION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}

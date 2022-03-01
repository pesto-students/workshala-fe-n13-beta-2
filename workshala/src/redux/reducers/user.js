import { type } from "./types";

const initialState = {
  user: [],
  loading: false,
  error: null,
  status: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case type.USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        status: true,
      };
    case type.USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.USER_LOG_OUT:
      return {
        initialState,
      };
    default:
      return state;
  }
}

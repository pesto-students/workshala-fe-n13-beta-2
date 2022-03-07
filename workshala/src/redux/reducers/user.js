import { type } from "./types";

const initialState = {
  user: [],
  loading: false,
  error: null,
  status: false,
  isLoggedIn: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case type.USER_SIGNUP_REQUESTED:
    case type.USER_SIGNIN_REQUESTED:
    case type.USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.USER_SIGNUP_SUCCESS:
    case type.USER_SIGNIN_SUCCESS:
    case type.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        status: true,
        isLoggedIn: true,
      };
    case type.USER_SIGNUP_FAILED:
    case type.USER_SIGNIN_FAILED:
    case type.USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
        isLoggedIn: false,
      };
    case type.USER_LOG_OUT:
      return {
        initialState,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

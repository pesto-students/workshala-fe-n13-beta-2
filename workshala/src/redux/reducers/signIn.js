import { type } from "./types";

const initialState = {
  signIn: [],
  loading: false,
  error: null,
  status: false
};

export default function signIn(state = initialState, action) {
  switch (action.type) {
    case type.USER_SIGNIN_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case type.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        signIn: action.signIn,
        status: true
      };
    case type.USER_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
        status: false
      };
    default:
      return state;
  }
}

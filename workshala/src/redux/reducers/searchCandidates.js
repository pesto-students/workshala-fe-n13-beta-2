import { type } from "./types";

const initialState = {
  searchCandidates: [],
  loading: true,
  error: null,
  status: false,
};

export default function searchCandidates(state = initialState, action) {
  switch (action.type) {
    case type.SEARCH_CANDIDATES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.SEARCH_CANDIDATES_SUCCESS:
      return {
        ...state,
        loading: false,
        searchCandidates: action.searchCandidates,
        status: true,
      };
    case type.SEARCH_CANDIDATES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}

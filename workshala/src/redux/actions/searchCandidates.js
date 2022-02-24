import { type } from "../reducers/types";

export default function searchCandidates(data) {
  return {
    type: type.SEARCH_CANDIDATES_REQUESTED,
    payload: data,
  };
}

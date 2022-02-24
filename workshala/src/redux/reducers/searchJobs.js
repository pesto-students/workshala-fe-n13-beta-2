import {type} from './types';

const initialState = {
    searchJobs : [],
    loading: true,
    error: null,
    status: false
}

export default function searchJobs(state= initialState, action) {
    switch (action.type) {
        case type.SEARCH_JOBS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.SEARCH_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                searchJobs: action.searchJobs,
                status: true
            }
        case type.SEARCH_JOBS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}
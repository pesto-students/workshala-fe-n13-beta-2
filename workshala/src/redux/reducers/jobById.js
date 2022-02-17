import {type} from './types';

const initialState = {
    jobsById : [],
    loading: true,
    error: null,
    status: false
}

export default function jobsById(state= initialState, action) {
    switch (action.type) {
        case type.JOBS_LIST_BY_ID_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.JOBS_LIST_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                jobsById: action.jobsById,
                status: true
            }
        case type.JOBS_LIST_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}
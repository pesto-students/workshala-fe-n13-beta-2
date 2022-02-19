import {type} from './types';

const initialState = {
    jobs : [],
    loading: true,
    error: null,
    status: false
}

export default function jobs(state= initialState, action) {
    switch (action.type) {
        case type.JOBS_LIST_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.JOBS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: action.jobs,
                status: true
            }
        case type.JOBS_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}
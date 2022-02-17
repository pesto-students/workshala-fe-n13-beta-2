import {type} from './types';

const initialState = {
    application : [],
    loading: true,
    error: null,
    status: false
}

export default function postApplication(state= initialState, action) {
    switch (action.type) {
        case type.POST_APPLICATION_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.POST_APPLICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                application: action.application,
                status: true
            }
        case type.POST_APPLICATION_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}
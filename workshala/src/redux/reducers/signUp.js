import {type} from './types';

const initialState = {
    signUp : [],
    loading: false,
    error: null,
    status: false
}

export default function signUp(state= initialState, action) {
    switch (action.type) {
        case type.USER_SIGNUP_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                signUp: action.signUp,
                status: true
            }
        case type.USER_SIGNUP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
                status: false
            }
        default:
            return state;
    }
}
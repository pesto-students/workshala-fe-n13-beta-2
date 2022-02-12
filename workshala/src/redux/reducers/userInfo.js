import {type} from './types';

const initialState = {
    userInfo : [],
    loading: false,
    error: null,
    status: false
}

export default function userInfo(state= initialState, action) {
    switch (action.type) {
        case type.USER_INFO_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.USER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.userInfo,
                status: true
            }
        case type.USER_INFO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}
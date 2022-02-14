import {combineReducers} from 'redux';
import signUp from './signUp'
import signIn from './signIn'
import userInfo from './userInfo'
import user from './user'
import jobs from './jobs'

const rootReducer = combineReducers({
    userInfo: userInfo,
    signUp: signUp,
    signIn: signIn,
    user: user,
    jobs: jobs
});

export default rootReducer;
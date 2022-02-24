import {combineReducers} from 'redux';
import signUp from './signUp'
import signIn from './signIn'
import userInfo from './userInfo'
import user from './user'
import jobs from './jobs'
import applications from './applications'
import currentUser from './currentUser'
import searchJobs from './searchJobs'
import searchCandidates from './searchCandidates'

const rootReducer = combineReducers({
    userInfo: userInfo,
    signUp: signUp,
    signIn: signIn,
    user: user,
    jobs: jobs,
    applications: applications,
    currentUser: currentUser,
    searchJobs: searchJobs,
    searchCandidates: searchCandidates
});

export default rootReducer;
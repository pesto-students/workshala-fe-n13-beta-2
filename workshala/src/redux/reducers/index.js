import {combineReducers} from 'redux';
import users from './users';
import signUp from './signUp'

const rootReducer = combineReducers({
    //users: users,
    signUp: signUp
});

export default rootReducer;
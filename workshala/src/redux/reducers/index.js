import { combineReducers } from "redux";
import signUp from "./signUp";
import signIn from "./signIn";
import userInfo from "./userInfo";
import user from "./user";
import jobs from "./jobs";
import postJob from "./postJob";
import applications from "./applications";
import currentUser from "./currentUser";

const rootReducer = combineReducers({
  userInfo: userInfo,
  signUp: signUp,
  signIn: signIn,
  user: user,
  jobs: jobs,
  applications: applications,
  currentUser: currentUser,
  postJob: postJob,
});

export default rootReducer;

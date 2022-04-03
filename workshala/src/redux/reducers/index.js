import { combineReducers } from "redux";
import userInfo from "./userInfo";
import user from "./user";
import jobs from "./jobs";
import applications from "./applications";
import currentUser from "./currentUser";
import searchJobs from "./searchJobs";
import searchCandidates from "./searchCandidates";

const rootReducer = combineReducers({
  userInfo: userInfo,
  user: user,
  jobs: jobs,
  applications: applications,
  currentUser: currentUser,
  searchJobs: searchJobs,
  searchCandidates: searchCandidates,
});

export default rootReducer;

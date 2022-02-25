import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {getObjectId} from './userSaga'

const baseUrl = "https://parseapi.back4app.com";

const headers = {
  "X-Parse-Application-Id": "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "X-Parse-REST-API-Key": "vPnwq9UPU2V4dIR6VASkdAQxTTucnLLvMSNzUZRi",
};

function getJobsList() {
  var url = baseUrl + "/functions/getJobInfoById";
  const params = {}
  return new Promise(resolve => {
  axios
    .post(url, params, { headers: headers })
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log("Error:"+error);
      throw error;
    });
  });
}

export function searchJobsApi(data) {
  var url = baseUrl + "/classes/JobInfo?where=";

  url += JSON.stringify(data); 
    
  return axios
    .get(url, { headers: headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Error:"+error);
      throw error;
    });
}

function* fetchJobsList(action) {
  try {
    const jobs = yield call(getJobsList, action);
    yield put({ type: "JOBS_LIST_SUCCESS", jobs: jobs });
  } catch (e) {
    yield put({ type: "JOBS_LIST_FAILED", message: e.message });
  }
}

function* searchJobs(action) {
  try {
    const searchJobs = yield call(searchJobsApi, action.payload);
    yield put({ type: "SEARCH_JOBS_SUCCESS", searchJobs: searchJobs });
  } catch (e) {
    yield put({ type: "SEARCH_JOBS_FAILED", message: e.message });
  }
}

function* fetchRecruitersPostedJobs(action) {
  try {
    // Step-1: Get objectIf of companyInfo using recruiter's Id   INPUT: Recruiter's ID, OUTPUT: CompanyInfo Object Id
    
    const companyInfo = yield call(getObjectId, action.payload);
    
    let payload = [];
    if(companyInfo !== undefined && companyInfo.data !== undefined && companyInfo.data.result !== undefined) {
       payload = {
      'companyId': companyInfo.data.result[0].objectId
      }
    }
    
    // Step-2: Search Jobs by CompanyId
    const Jobs = yield call(searchJobsApi, payload);
    
    yield put({ type: "RECRUITER_POSTED_JOBS_SUCCESS", jobs: Jobs });
  } catch (e) {
    yield put({ type: "RECRUITER_POSTED_JOBS_FAILED", message: e.message });
  }
}

function* jobSaga() {
  yield takeEvery("JOBS_LIST_REQUESTED", fetchJobsList);
  yield takeEvery("SEARCH_JOBS_REQUESTED", searchJobs);
  yield takeEvery("RECRUITER_POSTED_JOBS_REQUESTED", fetchRecruitersPostedJobs);
  
}

export default jobSaga;
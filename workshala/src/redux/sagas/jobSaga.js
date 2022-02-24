import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

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

function searchJobsApi(data) {
  var url = baseUrl + "/classes/JobInfo?where=";

  url += JSON.stringify(data); 
    
  return new Promise(resolve => {
  axios
    .get(url, { headers: headers })
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log("Error:"+error);
      throw error;
    });
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

function* jobSaga() {
  yield takeEvery("JOBS_LIST_REQUESTED", fetchJobsList);
  yield takeEvery("SEARCH_JOBS_REQUESTED", searchJobs);
}

export default jobSaga;
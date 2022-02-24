import { call, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

const baseUrl = "https://parseapi.back4app.com";

const headers = {
  "X-Parse-Application-Id": "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "X-Parse-REST-API-Key": "vPnwq9UPU2V4dIR6VASkdAQxTTucnLLvMSNzUZRi",
};

var navigation = "";

function getActiveJobsList() {
  var url = baseUrl + "/functions/getJobInfoByRecruiterId";
  const params = {};
  return new Promise((resolve) => {
    axios
      .post(url, params, { headers: headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("Error:" + error);
        throw error;
      });
  });
}

function* fetchActiveJobsList(action) {
  try {
    const jobs = yield call(getActiveJobsList, action);
    yield put({
      type: "JOBS_LIST_BY_RECRUITER_ID_SUCCESS",
      recruiterJobById: jobs,
    });
  } catch (e) {
    yield put({ type: "JOBS_LIST_BY_RECRUITER_ID_FAILED", message: e.message });
  }
}

function* activeJobSaga() {
  yield takeEvery("JOBS_LIST_BY_RECRUITER_ID_REQUESTED", fetchActiveJobsList);
}

export default activeJobSaga;

import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

const baseUrl = "https://parseapi.back4app.com";

const headers = {
  "X-Parse-Application-Id": "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "X-Parse-REST-API-Key": "vPnwq9UPU2V4dIR6VASkdAQxTTucnLLvMSNzUZRi",
};

function postAJob(data) {
  const userPayload = {
    title: data["Job Title"],
    desc: data["Description"],
    type: data["Job Type"],
    maxSalary: data["Max Salary"],
    minSalary: data["Min Salary"],
    experience: data["Exp required"],
    empType: data[true ? "Full Time" : "Part Time"],
    location: data["Location"],
  };

  const userHeader = {
    ...headers,
    "Content-Type": "application/json",
  };

  return axios
    .post(baseUrl + "/classes/JobInfo", userPayload, { headers: userHeader })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

function* postJob(action) {
  try {
    const jobResponse = yield call(postAJob, action.payload);
    yield put({ type: "POST_JOB_SUCCESS", postJob: jobResponse });
  } catch (e) {
    yield put({ type: "POST_JOB_FAILED", message: e.message });
  }
}

function* recruiterSaga() {
  yield takeEvery("POST_JOB_REQUESTED", postJob); // make entry in user - POST (reducer-signup) ->USER_SIGNUP_SUCCESS
}

export default recruiterSaga;

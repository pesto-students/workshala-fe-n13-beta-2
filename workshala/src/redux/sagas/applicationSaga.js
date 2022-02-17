import { call, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

const baseUrl = "https://parseapi.back4app.com";

const headers = {
  "X-Parse-Application-Id": "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "X-Parse-REST-API-Key": "vPnwq9UPU2V4dIR6VASkdAQxTTucnLLvMSNzUZRi",
};

var navigation = "";

function getAppsList() {
    var url = baseUrl + "/classes/ApplicationInfo";
  
    return new Promise(resolve => {
    axios
      .get(url, { headers: headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("Error:"+error);
        throw error;
      //  reject(error);
      });
    });
  }

function postApplicationApi(data) {
    var url = baseUrl + "/functions/postApplication";

    return axios
      .post(url, data.payload, { headers: headers })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
}

function* fetchApplications (action) {
  try {
    const applications = yield call(getAppsList, action);
    yield put({ type: "APPLICATIONS_LIST_SUCCESS", applications: applications });
  } catch (e) {
    yield put({ type: "APPLICATIONS_LIST_FAILED", message: e.message });
  }
}

function* postApplication(action) {
  try {
    const application = yield call(postApplicationApi, action.payload.payload);
    navigation = action.payload.navigation;
    navigation("/Applications");
    yield put({ type: "POST_APPLICATION_SUCCESS", application: application });
  } catch (e) {
    yield put({ type: "POST_APPLICATION_FAILED", message: e.message });
  }
}

function* applicationSaga() {
  //applications
  yield takeEvery('APPLICATIONS_LIST_REQUESTED', fetchApplications);

  yield takeEvery('POST_APPLICATION_REQUESTED', postApplication);
}

export default applicationSaga;

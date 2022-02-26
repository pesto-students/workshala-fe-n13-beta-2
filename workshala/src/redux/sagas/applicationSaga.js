import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {searchJobsApi} from './jobSaga'
import {getObjectId} from './userSaga'

const baseUrl = "https://parseapi.back4app.com";

const headers = {
  "X-Parse-Application-Id": "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "X-Parse-REST-API-Key": "vPnwq9UPU2V4dIR6VASkdAQxTTucnLLvMSNzUZRi",
};

let navigation = "";

function getAppsList() {
    var url = baseUrl + "/classes/ApplicationInfo";
  
    return new Promise(resolve => {
    axios
      .get(url, { headers: headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        throw error;
      });
    });
  }

  
function getApplicationsApi(data) {
  var url = baseUrl + "/classes/ApplicationInfo?where=";

  url += JSON.stringify(data); 

  return axios
    .get(url, { headers: headers })
    .then((response) => {
        return response;
    })
    .catch((error) => {
      throw error;
  });
}


function postApplicationApi(data) {
    var url = baseUrl + "/functions/postApplication";

    return axios
      .post(url, data, { headers: headers })
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
    navigation("/candidate/Applications");
    yield put({ type: "POST_APPLICATION_SUCCESS", application: application });
  } catch (e) {
    yield put({ type: "POST_APPLICATION_FAILED", message: e.message });
  }
}

function* fetchRecApplicationsList(action) {
  try {

    // step-1: Get ObjectId of companyInfo from recruiter's ID
    const companyInfo = yield call(getObjectId, action.payload);

    let payload = [];
    if(companyInfo !== undefined && companyInfo.data !== undefined && companyInfo.data.result !== undefined) {
       payload = {
      'companyId': companyInfo.data.result[0].objectId
      }
    }
    // step-2: Get Object-Id's of all the Jobs posted by Recruiter      - Input: Recruiter's Id, Output: Array of Objects from JobInfo
    const searchJobs = yield call(searchJobsApi, payload);

    let objectArr = [];
    // Step-3: Get ObjectsIds from above call
    if(searchJobs !== undefined && searchJobs.data !== undefined ) {
      searchJobs.data.results.forEach(function(key, k) { 
        objectArr[k] = key.objectId; 
      });
    }

    const applicationFilter = {
      'jobRef': {"$in": objectArr}
    }
    // Step-4: Fetch the Applications on basis of Objects list          - Input: Array of Objects, Output: Applications filter by active Jobs

    const applications = yield call(getApplicationsApi, applicationFilter);
    yield put({ type: "FETCH_APPLICATIONS_SUCCESS", applications: applications });
  } catch (e) {
    yield put({ type: "FETCH_APPLICATIONS_FAILED", message: e.message });
  }
}

function* applicationSaga() {
  //applications
  yield takeEvery('APPLICATIONS_LIST_REQUESTED', fetchApplications)
  yield takeEvery('POST_APPLICATION_REQUESTED', postApplication);
  yield takeEvery("FETCH_APPLICATIONS_REQUESTED", fetchRecApplicationsList);      // Applications list by recruiter
}

export default applicationSaga;

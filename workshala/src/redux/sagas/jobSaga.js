import { call, put, takeEvery, select } from "redux-saga/effects";
import { getObjectId } from "../../Services/User/User";
import {
  getJobsList,
  postAJob,
  searchJobsApi,
  deletePostedJobAPI,
} from "../../Services/Jobs/Jobs";

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

function* deletePostedJob(action) {
  try {
    const deletedJob = yield call(deletePostedJobAPI, action.payload);
    yield put({ type: "DELETE_POSTED_JOB_SUCCESS", deletedJob: deletedJob });
  } catch (e) {
    yield put({ type: "DELETE_POSTED_JOB_FAILED", message: e.message });
  }
}

function* fetchRecruitersPostedJobs(action) {
  try {
    const userData = yield select((state) => state.user.user);

    const filterData = {
      userId: userData.data.objectId,
      role: userData.data.role,
    };
    // Step-1: Get objectIf of companyInfo using recruiter's Id   INPUT: Recruiter's ID, OUTPUT: CompanyInfo Object Id

    const companyInfo = yield call(getObjectId, filterData);

    let payload = [];
    if (
      companyInfo !== undefined &&
      companyInfo.data !== undefined &&
      companyInfo.data.result !== undefined
    ) {
      payload = {
        companyId: companyInfo.data.result[0].objectId,
      };
    }

    // Step-2: Search Jobs by CompanyId
    const Jobs = yield call(searchJobsApi, payload);

    yield put({ type: "RECRUITER_POSTED_JOBS_SUCCESS", jobs: Jobs });
  } catch (e) {
    yield put({ type: "RECRUITER_POSTED_JOBS_FAILED", message: e.message });
  }
}

function* postJob(action) {
  try {
    const userData = yield select((state) => state.user.user);

    const filterData = {
      userId: userData.data.objectId,
      role: userData.data.role,
    };

    const companyInfo = yield call(getObjectId, filterData);
    let payload = [];
    if (
      companyInfo !== undefined &&
      companyInfo.data !== undefined &&
      companyInfo.data.result !== undefined
    ) {
      payload = {
        ...action.payload.data,
        companyId: companyInfo.data.result[0].objectId,
      };
    }
    const jobResponse = yield call(postAJob, payload);
    let navigation = action.payload.navigation;
    navigation("/" + action.payload.role + "/Jobs");
    yield put({ type: "POST_JOB_SUCCESS", postJob: jobResponse });
  } catch (e) {
    yield put({ type: "POST_JOB_FAILED", message: e.message });
  }
}

function* jobSaga() {
  yield takeEvery("JOBS_LIST_REQUESTED", fetchJobsList);
  yield takeEvery("SEARCH_JOBS_REQUESTED", searchJobs);
  yield takeEvery("RECRUITER_POSTED_JOBS_REQUESTED", fetchRecruitersPostedJobs);
  yield takeEvery("POST_JOB_REQUESTED", postJob); // make entry in user - POST (reducer-signup) ->USER_SIGNUP_SUCCESS
  yield takeEvery("POST_JOB_SUCCESS", fetchRecruitersPostedJobs);
  yield takeEvery("DELETE_POSTED_JOB_REQUESTED", deletePostedJob);
  yield takeEvery("DELETE_POSTED_JOB_SUCCESS", fetchRecruitersPostedJobs);
}

export default jobSaga;

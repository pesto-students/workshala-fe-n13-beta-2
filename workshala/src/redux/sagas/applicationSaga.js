import { call, put, takeEvery, select } from "redux-saga/effects";
import { searchJobsApi } from "../../Services/Jobs/Jobs";
import { getObjectId, uploadFile } from "../../Services/User/User";
import { isEmpty } from "../../Utils/Generic";
import {
  getAppsList,
  updateApplicationsApi,
  getApplicationsApi,
  postApplicationApi,
} from "../../Services/Applications/Applications";

function* fetchApplications(action) {
  try {
    const userData = yield select((state) => state.user.user);

    const filterData = {
      userId: userData.data.objectId,
      role: userData.data.role,
    };

    // step-1: Get ObjectId of userInfo from user's ID
    const userInfo = yield call(getObjectId, filterData);

    let payload = [];
    if (
      userInfo !== undefined &&
      userInfo.data !== undefined &&
      userInfo.data.result !== undefined
    ) {
      payload = {
        userId: userInfo.data.result[0].objectId,
      };
    }

    const applications = yield call(getAppsList, payload);
    yield put({
      type: "APPLICATIONS_LIST_SUCCESS",
      applications: applications,
    });
  } catch (e) {
    yield put({ type: "APPLICATIONS_LIST_FAILED", message: e.message });
  }
}

function* postApplication(action) {
  try {
    // Step-1: Post file
    const { payload, resume, jobRef, navigation } = action.payload;

    let fileInfo = [];
    if (resume !== undefined && !isEmpty(resume)) {
      fileInfo = yield call(uploadFile, resume);
    }

    const userData = yield select((state) => state.user.user);
    const role = userData.data.role;

    const filterData = {
      userId: userData.data.objectId,
      role: role,
    };

    // step-1: Get ObjectId of userInfo from user's ID
    const userInfo = yield call(getObjectId, filterData);

    let finalPayload = [];
    if (
      userInfo !== undefined &&
      userInfo.data !== undefined &&
      userInfo.data.result !== undefined
    ) {
      finalPayload = {
        ...payload,
        userId: userInfo.data.result[0].objectId,
        ...(role === "candidate" &&
          !isEmpty(resume) && {
            resume: {
              name: fileInfo.data.name,
              url: fileInfo.data.url,
              __type: "File",
            },
          }),
        jobRef: {
          className: "JobInfo",
          __type: "Pointer",
          objectId: jobRef,
        },
      };
    }

    const application = yield call(postApplicationApi, finalPayload);
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
    if (
      companyInfo !== undefined &&
      companyInfo.data !== undefined &&
      companyInfo.data.result !== undefined
    ) {
      payload = {
        companyId: companyInfo.data.result[0].objectId,
      };
    }
    // step-2: Get Object-Id's of all the Jobs posted by Recruiter      - Input: Recruiter's Id, Output: Array of Objects from JobInfo
    const searchJobs = yield call(searchJobsApi, payload);

    let objectArr = [];
    // Step-3: Get ObjectsIds from above call
    if (searchJobs !== undefined && searchJobs.data !== undefined) {
      searchJobs.data.results.forEach(function (key, k) {
        objectArr[k] = key.objectId;
      });
    }

    const applicationFilter = {
      jobRef: { $in: objectArr },
    };
    // Step-4: Fetch the Applications on basis of Objects list          - Input: Array of Objects, Output: Applications filter by active Jobs

    const applications = yield call(getApplicationsApi, applicationFilter);
    yield put({
      type: "FETCH_APPLICATIONS_SUCCESS",
      applications: applications,
    });
  } catch (e) {
    yield put({ type: "FETCH_APPLICATIONS_FAILED", message: e.message });
  }
}

function* updateApplication(action) {
  try {
    const payload = {
      data: action.payload.data,
      objectId: action.payload.objectId,
    };

    const applications = yield call(updateApplicationsApi, payload);
    yield put({
      type: "UPDATE_APPLICATION_SUCCESS",
      applications: applications,
    });
  } catch (e) {
    yield put({ type: "UPDATE_APPLICATION_FAILED", message: e.message });
  }
}

function* applicationSaga() {
  //applications
  yield takeEvery("APPLICATIONS_LIST_REQUESTED", fetchApplications); // list requested by candidate
  yield takeEvery("POST_APPLICATION_REQUESTED", postApplication);
  yield takeEvery("POST_APPLICATION_SUCCESS", fetchApplications); // list requested by candidate
  yield takeEvery("FETCH_APPLICATIONS_REQUESTED", fetchRecApplicationsList); // Applications list by recruiter
  yield takeEvery("UPDATE_APPLICATION_REQUESTED", updateApplication); // Requested by recruiter
}

export default applicationSaga;

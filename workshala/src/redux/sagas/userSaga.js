import { call, put, takeEvery, select } from "redux-saga/effects";
import { isEmpty } from "../../Utils/Generic";
import {
  uploadFile,
  getObjectId,
  updateUserInfoApi,
  getUserInfo,
  searchCandidatesApi,
} from "../../Services/User/User";

function* fetchUpdatedUserInfo(action) {
  const userData = yield select((state) => state.user.user);

  try {
    const users = yield call(getUserInfo, userData);
    yield put({ type: "UPDATED_PROFILE_SUCCESS", userInfo: users });
  } catch (e) {
    yield put({ type: "UPDATED_PROFILE_FAILED", message: e.message });
  }
}

function* fetchUserInfo(action) {
  const userData = yield select((state) => state.user.user);

  try {
    const users = yield call(getUserInfo, userData);
    yield put({ type: "USER_INFO_SUCCESS", userInfo: users });
  } catch (e) {
    yield put({ type: "USER_INFO_FAILED", message: e.message });
  }
}

function* searchCandidates(action) {
  try {
    const searchCandidates = yield call(searchCandidatesApi, action.payload);
    yield put({
      type: "SEARCH_CANDIDATES_SUCCESS",
      searchCandidates: searchCandidates,
    });
  } catch (e) {
    yield put({ type: "SEARCH_CANDIDATES_FAILED", message: e.message });
  }
}

function* updateUserInfo(action) {
  const { data, imgData, navigation, resumeData, role } = action.payload;

  let imgResp = [];
  let resumeResp = [];
  try {
    //If no image to uploaded, then skip uploading
    if (!isEmpty(imgData)) {
      imgResp = yield call(uploadFile, imgData); // 1. Upload image if available
    }

    //If no image to uploaded, then skip uploading
    if (resumeData !== undefined && !isEmpty(resumeData)) {
      resumeResp = yield call(uploadFile, resumeData); // 2. Upload resume if available
    }

    const argData =
      role === "recruiter"
        ? { userId: data.recruiterId, role: role }
        : { userId: data.userId, role: role };

    const userInfo = yield call(getObjectId, argData); // 3. get objectId from userId

    const arg = {
      data: userInfo.data,
      originalData: data,
      imgData: imgResp,
      resumeData: resumeResp,
      role: role,
    };

    const updateUserInfo = yield call(updateUserInfoApi, arg); // 4. Attach to object

    navigation("/" + role + "/profile"); // 5. Navigate to profile
    yield put({ type: "UPDATE_USER_SUCCESS", userInfo: updateUserInfo });
  } catch (e) {
    yield put({ type: "UPDATE_USER_FAILED", message: e.message });
  }
}

function* userSaga() {
  yield takeEvery("USER_SUCCESS", fetchUserInfo); // get role and userid from user, feed to profile and navigate to dashboard -> USER_INFO_SUCCESS
  yield takeEvery("UPDATED_PROFILE_REQUESTED", fetchUpdatedUserInfo);
  yield takeEvery("UPDATE_USER_SUCCESS", fetchUpdatedUserInfo);
  yield takeEvery("SEARCH_CANDIDATES_REQUESTED", searchCandidates);
  yield takeEvery("UPDATE_USER_INFO", updateUserInfo);
}

export default userSaga;

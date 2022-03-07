import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  getUser,
  getCurrentUser,
  login,
} from "../../Services/Authorisation/Login";
import { register } from "../../Services/Authorisation/SignUp";

function* fetchCurrentUser(action) {
  try {
    const userData = yield select((state) => state.user.user);
    const currentUser = yield call(getCurrentUser, userData);
    yield put({ type: "CURRENT_USER_REQUESTED", user: currentUser });
  } catch (e) {
    yield put({ type: "CURRENT_USER_REQUESTED", message: e.message });
  }
}

function* signInUser(action) {
  try {
    const user = yield call(login, action.payload.data);

    //On Success, Navigate to Dashboard
    const navigation = action.payload.navigation;
    navigation("/" + user.data.role + "/dashboard");

    yield put({ type: "USER_SIGNIN_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "USER_SIGNIN_FAILED", message: e.message });
  }
}

function* signUpUser(action) {
  try {
    const user = yield call(register, action.payload.data);
    const currentUser = yield call(getCurrentUser, user);
    //On Success, Navigate to Dashboard
    const navigation = action.payload.navigation;
    navigation("/" + action.payload.role + "/dashboard");

    yield put({ type: "USER_SIGNUP_SUCCESS", user: currentUser });
  } catch (e) {
    yield put({ type: "USER_SIGNUP_FAILED", message: e.message });
  }
}

function* logOut(action) {
  try {
    const user = yield select((state) => state.user.user);
    yield put({ type: "USER_LOGOUT_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "USER_LOGOUT_FAILED", message: e.message });
  }
}

function* authSaga() {
  yield takeEvery("USER_SIGNIN_REQUESTED", signInUser);
  yield takeEvery("USER_SIGNUP_REQUESTED", signUpUser);

  yield takeEvery("CURRENT_USER_REQUESTED", fetchCurrentUser);
  yield takeEvery("USER_LOG_OUT", logOut);
}

export default authSaga;

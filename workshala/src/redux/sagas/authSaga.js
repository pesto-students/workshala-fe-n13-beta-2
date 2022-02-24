import { call, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

const baseUrl = "https://parseapi.back4app.com";

const headers = {
  "X-Parse-Application-Id": "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "X-Parse-REST-API-Key": "vPnwq9UPU2V4dIR6VASkdAQxTTucnLLvMSNzUZRi",
};

let navigation = "";

function getUser(data) {
  if (data !== undefined && data.data !== undefined) {
    const userId = data.data.objectId;

    var url = baseUrl + "/users/" + userId;
    //var url = baseUrl + "/functions/getCandidateProfile";
    //const params = {userId: userId}

    return axios
      .get(url, { headers: headers })
      .then((response) => {
        //setProfileData(response.data);
        //navigation('Dashboard');
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

function getCurrentUser(data) {
  var url = baseUrl + "/users/me";

  if (data !== undefined && data.data !== undefined) {
    const sessionToken = data.data.sessionToken;

    const custHeader = {
      ...headers,
      "X-Parse-Session-Token": sessionToken,
    };

    return new Promise((resolve) => {
      axios
        .get(url, { headers: custHeader })
        .then((response) => {
          //updateJobList(response.data.results);
          //navigation('Dashboard');
          resolve(response);
        })
        .catch((error) => {
          console.log("Error:" + error);
          throw error;
          //  reject(error);
        });
    });
  }
}

function signUpApi(data) {
  const userPayload = {
    username: data["email"],
    email: data["email"],
    role: data["role"],
    password: data["password"],
    firstName: data["firstName"],
    lastName: data["lastName"],
  };

  const userHeader = {
    ...headers,
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json",
  };

  return axios
    .post(baseUrl + "/users", userPayload, { headers: userHeader })
    .then((response) => {
      navigation = data["navigation"];
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

function signInApi(data) {
  const config = {
    headers: headers,
    params: data,
  };

  return axios
    .get(baseUrl + "/login", config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

function* fetchCurrentUser(action) {
    try {
      const userData = yield select((state) => state.user.user);
      const currentUser = yield call(getCurrentUser, userData);
      yield put({ type: "CURRENT_USER_REQUESTED", currentUser: currentUser });
    } catch (e) {
      yield put({ type: "CURRENT_USER_REQUESTED", message: e.message });
    }
  }

function* signInUser(action) {
    try {
      const user = yield call(signInApi, action.payload.data);
      navigation = action.payload.navigation;
      navigation("/candidate/dashboard");
      yield put({ type: "USER_SUCCESS", user: user });
    } catch (e) {
      yield put({ type: "USER_FAILED", message: e.message });
    }
}

function* fetchUser(parentComp, action) {
    var userData = "";
    if (parentComp === "signIn") {
      userData = yield select((state) => state.signIn.signIn);
    } else {
      userData = yield select((state) => state.signUp.signUp);
    }
    console.log("experimenting: " + userData);
  
    if (userData == undefined) {
      yield put({ type: "USER_FAILED", message: "userData is null" });
    } else {
      try {
        const user = yield call(getUser, userData);
        yield put({ type: "USER_SUCCESS", user: user });
      } catch (e) {
        yield put({ type: "USER_FAILED", message: e.message });
      }
    }
  }

function* signUpUser(action) {
    try {
      const signUp = yield call(signUpApi, action.payload);
      yield put({ type: "USER_SIGNUP_SUCCESS", signUp: signUp });
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

  yield takeEvery("USER_SIGNUP_REQUESTED", signUpUser); // make entry in user - POST (reducer-signup) ->USER_SIGNUP_SUCCESS
  yield takeEvery("USER_SIGNIN_REQUESTED", signInUser); // login, reducer-signIn, -> USER_SUCCESS
  yield takeEvery("USER_SIGNUP_SUCCESS", fetchUser, "signUp"); // get userId from sigup, GET (users/UserId) -> USER_SUCCESS
  yield takeEvery("CURRENT_USER_REQUESTED", fetchCurrentUser);
  yield takeEvery("USER_LOG_OUT", logOut)
}

export default authSaga;

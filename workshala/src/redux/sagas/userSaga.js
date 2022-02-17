import { call, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";
import { setProfileData } from "../../Components/Profile/ProfileInfo";

const baseUrl = "https://parseapi.back4app.com";

const headers = {
  "X-Parse-Application-Id": "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "X-Parse-REST-API-Key": "vPnwq9UPU2V4dIR6VASkdAQxTTucnLLvMSNzUZRi",
};

var navigation = "";

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

function getUserInfo(data) {
  if (data !== undefined && data.data !== undefined) {
    const userId = data.data.objectId;
    const role = data.data.role;

    //var url = baseUrl + '/classes/UserInfo';
    var url = baseUrl + "/functions/getProfile";
    const params = { userId: userId, role: role };

    return axios
      .post(url, params, { headers: headers })
      .then((response) => {
        setProfileData(response.data.result[0]);
        navigation("Dashboard");
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

// function getJobById(data) {
//   if (data !== undefined ) {
//     const jobId = data.payload;

//     const params = { jobId: jobId };
//     var url = baseUrl + "/functions/getJobInfoById";

//     return new Promise((resolve) => {
//       axios
//         .post(url, params, { headers: headers })
//         .then((response) => {
//           //updateJobList(response.data.results);
//           //navigation('Dashboard');
//           resolve(response);
//         })
//         .catch((error) => {
//           console.log("Error:" + error);
//           throw error;
//           //  reject(error);
//         });
//     });
//   }
// }

function getCurrentUser(data) {
  var url = baseUrl + "/users/me";

  if (data !== undefined && data.data !== undefined) {
    const sessionToken = data.data.sessionToken;

    const custHeader = {
      ...headers,
      'X-Parse-Session-Token' : sessionToken
    }

    return new Promise(resolve => {
      axios
      .get(url, { headers: custHeader })
      .then((response) => {
        //updateJobList(response.data.results);
        //navigation('Dashboard');
        resolve(response);
      })
      .catch((error) => {
        console.log("Error:"+error);
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
/*
function* fetchUser(action) {
    var userData = '';
    if(parentComp === 'signIn') {
        userData = yield select((state) => state.signIn.signIn);
    } else {
        userData = yield select((state) => state.signUp.signUp);
    }
    console.log("experimenting: "+userData);

     try {
         const user = yield call(getUser, action.payload);
         yield put({type: 'USER_REQUESTED', user: user});
     } catch(e) {
         yield put({ type: 'USER_FAILED', message: e.message});
     }
}*/

function* fetchUserInfo(action) {
  const userData = yield select((state) => state.user.user);

  try {
    const users = yield call(getUserInfo, userData);
    yield put({ type: "USER_INFO_SUCCESS", userInfo: users });
  } catch (e) {
    yield put({ type: "USER_INFO_FAILED", message: e.message });
  }
}

function signInApi(data) {
  const config = {
    headers: headers,
    params: { username: data["username"], password: data["password"] },
  };

  return axios
    .get(baseUrl + "/login", config)
    .then((response) => {
      navigation = data["navigation"];
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

function* signUpUser(action) {
  try {
    const signUp = yield call(signUpApi, action.payload);
    yield put({ type: "USER_SIGNUP_SUCCESS", signUp: signUp });
  } catch (e) {
    yield put({ type: "USER_SIGNUP_FAILED", message: e.message });
  }
}

function* signInUser(action) {
  try {
    const user = yield call(signInApi, action.payload);
    yield put({ type: "USER_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "USER_FAILED", message: e.message });
  }
}

function* showError(parentComp, action) {
  // TODO: Pages need to be created
  switch (parentComp) {
    case "signIn":
      console.log("SignIn error");
      break;

    case "signUp":
      console.log("SignUp error");
      break;

    default:
      console.log("usersage: showError: error");
      break;
  }
}

function* fetchCurrentUser (action) {
  try {
    const userData = yield select((state) => state.user.user);
    const currentUser = yield call(getCurrentUser, userData);
    yield put({ type: "CURRENT_USER_REQUESTED", currentUser: currentUser });
  } catch (e) {
    yield put({ type: "CURRENT_USER_REQUESTED", message: e.message });
  }
}

// function* fetchJobById (action) {
//   try {
//     const jobData = yield call(getJobById, action);
//     yield put({ type: "JOBS_LIST_BY_ID_SUCCESS", jobsById: jobData });
//   } catch (e) {
//     yield put({ type: "JOBS_LIST_BY_ID_FAILED", message: e.message });
//   }
// }

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

function* userSaga() {
  //SIGN-UP
  yield takeEvery("USER_SIGNUP_REQUESTED", signUpUser); // make entry in user - POST (reducer-signup) ->USER_SIGNUP_SUCCESS
  yield takeEvery("USER_SIGNUP_SUCCESS", fetchUser, "signUp"); // get userId from sigup, GET (users/UserId) -> USER_SUCCESS
  // yield takeEvery('USER_SIGNUP_SUCCESS',   showDashBoard, 'signUp');
  //yield takeEvery('USER_SIGNUP_FAILED', showError, 'signUp');

  //SIGN-IN
  yield takeEvery("USER_SIGNIN_REQUESTED", signInUser); // login, reducer-signIn, -> USER_SUCCESS
  //yield takeEvery('USER_SIGNIN_SUCCESS',   showDashBoard, 'signIn');
  //yield takeEvery('USER_SIGNIN_FAILED',   showError, 'signIn');

  //User
  // yield takeEvery('USER_REQUESTED', fetchUserInfo);
  yield takeEvery("USER_SUCCESS", fetchUserInfo); // get role and userid from user, feed to profile and navigate to dashboard -> USER_INFO_SUCCESS
  //yield takeEvery('USER_FAILED', fetchUserInfo);

  //User Info
  //yield takeEvery('USER_INFO_REQUESTED', fetchUser);
  //yield takeEvery('USER_INFO_FAILED', showError, 'userInfo');

  //currentUser
  yield takeEvery('CURRENT_USER_REQUESTED', fetchCurrentUser);

  //yield takeEvery('JOBS_LIST_BY_ID_REQUESTED', fetchJobById);
}

export default userSaga;
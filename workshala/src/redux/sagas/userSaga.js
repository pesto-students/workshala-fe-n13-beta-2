import { call, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";
import { isEmpty } from "../../Services/Utils/Generic";

const baseUrl = "https://parseapi.back4app.com";

const headers = {
  "X-Parse-Application-Id": "BxnHmCjdT1tQTZBT1OIaZuiMSJkcGMVj8oAPfhEf",
  "X-Parse-REST-API-Key": "vPnwq9UPU2V4dIR6VASkdAQxTTucnLLvMSNzUZRi",
};

function uploadFile(data) {
  if(data !== undefined) {
    const fileName = data.name;
    const fileData = data.file;
    const dataType = data.dataType

    var url = baseUrl + "/parse/files/" + fileName;
    
    const custHeader = {
      ...headers,
      'Content-Type': dataType
      //'Content-Type': 'multipart/form-data'
    }
    
    return axios
      .post(url, fileData, { headers: custHeader })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };   
}

function getUserId (data) {
    if(data !== undefined) {
      
      var userId = data.userId;
      
      var url = baseUrl + "/functions/getUserInfoObjectId";
     
      const params = {
          userId: userId,
      };

      return axios
          .post(url, params, { headers: headers })
          .then((response) => { return response})
    };
}  

function updateUserInfoApi(data) {
  if(data !== undefined && data.data !== undefined && data.data.result && data.originalData !== undefined) {
    const baseData = data.data.result[0];
    const objectId = baseData.objectId;
    const origData = data.originalData;
      
    const payload = {
                ...origData,
               ...(!isEmpty(data.imgData)) && {"profileImg": {
                  "name": data.imgData.data.name,
                  "url": data.imgData.data.url,
                  "__type": "File"
                }},
                ...(!isEmpty(data.resumeData)) && {"resume" : {
                  "name": data.resumeData.data.name,
                  "url": data.resumeData.data.url,
                  "__type": "File"
                }}
    }

    const url = baseUrl + "/classes/UserInfo/" + objectId;

    const custHeader = {
        ...headers,
        'Content-Type': 'application/json'
    }

    return axios
            .put(url, payload, { headers: custHeader })
            .then((response) => {
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

    var url = baseUrl + "/functions/getProfile";
    const params = { userId: userId, role: role };

    return axios
      .post(url, params, { headers: headers })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

function searchCandidatesApi(data) {
  var url = baseUrl + "/classes/UserInfo";
  //const temp = {"arrayKey": "mechanic"};
  //url += JSON.stringify(temp);
  if (!isEmpty(data)) url += "?where=" + JSON.stringify(data);

  return new Promise((resolve) => {
    axios
      .get(url, { headers: headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("Error:" + error);
        throw error;
      });
  });
}

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
  // Get user data
  const user = yield select((state) => state.user.user);

  const {payload, navigation} = action.payload;
  
  const imgData = payload.imgData;
  const resumeData = payload.resumeData;
 
  let imgResp = [];
  let resumeResp = [];
  try {
    //If no image to uploaded, then skip uploading 
    if(!isEmpty(imgData))     {              
      imgResp = yield call(uploadFile, imgData);                      // 1. Upload image if available
    }

    //If no image to uploaded, then skip uploading 
    if(!isEmpty(resumeData))     {              
      resumeResp = yield call(uploadFile, resumeData);                // 2. Upload resume if available
    }

    const userInfo = yield call(getUserId, payload.data);             // 3. get userId from objectId

    const {data} = userInfo;
    const arg = {
        data: data,
        originalData: payload.data,
        imgData: imgResp,
        resumeData: resumeResp
    }

    const updateUserInfo = yield call(updateUserInfoApi, arg);        // 4. Attach to object
                    
    navigation("/candidate/profile");                                           // 5. Navigate to profile
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

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

function getObjectId (data) {
    if(data !== undefined) {
      
      const userId = data.userId;
      const role = data.role;

      var url = baseUrl + "/functions/getUserObjectId";
     
      const params = {
          userId: userId,
          role: role
      };

      return axios
          .post(url, params, { headers: headers })
          .then((response) => { return response})
          .catch((error) => {
            throw error;
          });
    };
}  

function updateUserInfoApi(data) {
  if(data !== undefined && data.data !== undefined && data.data.result && data.originalData !== undefined) {
    const baseData = data.data.result[0];
    const objectId = baseData.objectId;
    const origData = data.originalData;
    const role = data.role;
      
    const payload = {
                ...origData,
               ...(!isEmpty(data.imgData) && {"profileImg": {
                  "name": data.imgData.data.name,
                  "url": data.imgData.data.url,
                  "__type": "File"
                }}),
                ...(role === "candidate" && !isEmpty(data.resumeData) && {"resume" : {
                  "name": data.resumeData.data.name,
                  "url": data.resumeData.data.url,
                  "__type": "File"
                }})
    }

    const url = (role === "candidate") ? 
                          (baseUrl + "/classes/UserInfo/" + objectId) : 
                          (baseUrl + "/classes/CompanyInfo/" + objectId);
     
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
  
  const {data, imgData, navigation, resumeData, role} = action.payload;
  
  let imgResp = [];
  let resumeResp = [];
  try {
    //If no image to uploaded, then skip uploading 
    if(!isEmpty(imgData))     {              
      imgResp = yield call(uploadFile, imgData);                                            // 1. Upload image if available
    }

    //If no image to uploaded, then skip uploading 
    if(resumeData !== undefined && !isEmpty(resumeData))     {              
      resumeResp = yield call(uploadFile, resumeData);                                      // 2. Upload resume if available
    }

    const argData = (role === "recruiter") ? {userId: data.recruiterId, role: role} : {userId: data.userId, role: role};

    const userInfo = yield call(getObjectId, argData);                                      // 3. get objectId from userId

    const arg = {
        data: userInfo.data,
        originalData: data,
        imgData: imgResp,
        resumeData: resumeResp,
        role: role
    }

    const updateUserInfo = yield call(updateUserInfoApi, arg);                              // 4. Attach to object
                    
    navigation("/" + role + "/profile");                                           // 5. Navigate to profile
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

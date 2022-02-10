import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const apiUrl = 'https://workshala.b4a.io/classes/UserInfo';

const postApiUrl = 'https://workshala.b4a.io/classes/UserInfo';

/*
function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => console.log(response))
      .catch((error) => {throw error})
}
*/


const headers = {
    'X-Parse-Application-Id': 'xxaq9UhFnMAzUPxVF4mjqmZQEouYPPVWoXNyRGaO',
    'X-Parse-REST-API-Key': 'k0D3nNGJ0O44nI0iQ5QZVBi7hPinfQ6B6N5Jh1iw',
  };

function getApi() {
     return axios.get(apiUrl, {headers})
        .then(response => response.data.results)
        .catch((error) => {throw error});
}/*
const data ={
    "userId": "4cP0GND2Hj",
    "firstName":"Johnny",
    "lastName":"Doey"
};*/

function postApi(data) {
    return axios.post(postApiUrl, data.payload, {headers})
       .then(response => response)
       .catch((error) => {throw error});
}

function* fetchUsers(action) {
    try {
        const users = yield call(getApi);
        yield put({type: 'GET_USERS_SUCCESS', users: users});
    } catch(e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message});
    }
}

// function Navigateto() {
    
//     return (
    
//         //navigate('Dashboard')
//     );
// }

function* NavigateTo(action) {
  //  yield call(Navigateto());
    
    console.log("state is changed to required one");
}

function* AddUser(action) {
    
    try {
        const signUp = yield call(postApi, action);
        yield put({type: 'POST_USER_SIGNUP_SUCCESS', signUp: signUp});    
    } catch(e) {
        yield put({ type: 'POST_USER_SIGNUP_FAILED', message: e.message});
    }
}

function* userSaga() {
    //yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
    yield takeEvery('POST_USER_SIGNUP_REQUESTED', AddUser);
    yield takeEvery('POST_USER_SIGNUP_SUCCESS', NavigateTo);
    yield takeEvery('POST_USER_SIGNUP_FAILED', NavigateTo);
}

export default userSaga;
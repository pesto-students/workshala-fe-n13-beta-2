import {call, put, takeEvery, select} from 'redux-saga/effects';
import axios from 'axios';
import {setProfileData} from '../../Components/Dashboard/ProfileInfo'

const baseUrl = 'https://workshala.b4a.io';

const headers = {
    'X-Parse-Application-Id': 'xxaq9UhFnMAzUPxVF4mjqmZQEouYPPVWoXNyRGaO',
    'X-Parse-REST-API-Key': 'k0D3nNGJ0O44nI0iQ5QZVBi7hPinfQ6B6N5Jh1iw'
};

var navigation = '';

function getUserInfo(data) {    
    if(data !== undefined && data.data !== undefined) {
        const userId = data.data.objectId;
        const role = data.data.role;
        
        var url = baseUrl + '/functions/getCandidateProfile';

        const payload = {'userId': userId, 'role': role}
        
        return axios.post(url, payload, {headers: headers})
                .then(response => {
                    setProfileData(response.data.result[0]);
                    navigation('Dashboard');
                    return response;
                })
                .catch((error) => {throw error});
    }
}

function signUpApi(data) {
    const userPayload = {
        username: data['email'],
        email: data['email'],
        role: data['role'],
        password: data['password'],
        firstName: data['firstName'],
        lastName: data['lastName']
    }
    
    const userHeader = {
           ...headers,
           'X-Parse-Revocable-Session': '1',
           'Content-Type': 'application/json'
    }

    return axios.post(baseUrl + '/users', userPayload, {headers: userHeader})
       .then(response => {
            navigation = data['navigation'];
            return response;
        }).catch((error) => {throw error});
}

function* fetchUserInfo(action) {
     try {
         const users = yield call(getUserInfo, action.payload);
         yield put({type: 'USER_INFO_SUCCESS', userInfo: users});
     } catch(e) {
         yield put({ type: 'USER_INFO_FAILED', message: e.message});
     }
}

function signInApi(data) { 
    const config = {
        headers: headers,
        params: {username: data['username'], password: data['password']}
    }
     
     return axios.get(baseUrl + '/login', config)
        .then(response => {
            navigation = data['navigation'];
            return response;
        })
        .catch((error) => {throw error});
}

function* signUpUser(action) {
    try {
        const signUp = yield call(signUpApi, action.payload);
        yield put({type: 'USER_SIGNUP_SUCCESS', signUp: signUp});    
    } catch(e) {
        yield put({ type: 'USER_SIGNUP_FAILED', message: e.message});
    }
}

function* signInUser(action) {
    try {
        const signIn = yield call(signInApi, action.payload);
        yield put({type: 'USER_SIGNIN_SUCCESS', signIn: signIn});    
    } catch(e) {
        yield put({ type: 'USER_SIGNIN_FAILED', message: e.message});
    }
}

function* showError(parentComp, action) {       // TODO: Pages need to be created
    switch(parentComp) {
        case 'signIn':
            console.log("SignIn error");
            break;
        
        case 'signUp':
            console.log("SignUp error");
            break;
        
        default: 
        console.log("usersage: showError: error");
        break;
    }
}

function* showDashBoard(parentComp, action) {
    var userData = '';
    if(parentComp === 'signIn') {
        userData = yield select((state) => state.signIn.signIn);
    } else {
        userData = yield select((state) => state.signUp.signUp);
    }
    console.log("experimenting: "+userData);

    if(userData == undefined) {
        yield put({ type: 'USER_INFO_FAILED', message: 'userData is null'});
    } else {    
        try {
            const userInfo = yield call(getUserInfo, userData);
            yield put({type: 'USER_INFO_SUCCESS', userInfo: userInfo});    
        } catch(e) {
            yield put({ type: 'USER_INFO_FAILED', message: e.message});
        }
    }
}

function* userSaga() {
    //SIGN-UP
    yield takeEvery('USER_SIGNUP_REQUESTED', signUpUser);
    yield takeEvery('USER_SIGNUP_SUCCESS',   showDashBoard, 'signUp');
    yield takeEvery('USER_SIGNUP_FAILED', showError, 'signUp');

    yield takeEvery('USER_SIGNIN_REQUESTED', signInUser);
    yield takeEvery('USER_SIGNIN_SUCCESS',   showDashBoard, 'signIn');
    yield takeEvery('USER_SIGNIN_FAILED',   showError, 'signIn');

    //User Info
    yield takeEvery('USER_INFO_REQUESTED', fetchUserInfo);
    //yield takeEvery('USER_INFO_SUCCESS', NavigateTo);
    yield takeEvery('USER_INFO_FAILED', showError, 'userInfo');
}

export default userSaga;
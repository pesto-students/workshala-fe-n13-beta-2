import {all} from 'redux-saga/effects'
import applicationSaga from './applicationSaga';
import jobSaga from './jobSaga';
import userSaga from './userSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
    yield all([authSaga(), userSaga(), jobSaga(), applicationSaga()]);
}
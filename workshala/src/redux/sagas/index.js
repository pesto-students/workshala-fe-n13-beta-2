import {all} from 'redux-saga/effects'
import applicationSaga from './applicationSaga';
import jobSaga from './jobSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all([userSaga(), jobSaga(), applicationSaga()]);
}
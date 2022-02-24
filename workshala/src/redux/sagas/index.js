import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import recruiterSaga from "./recruiterSaga";
import applicationSaga from "./applicationSaga";
import jobSaga from "./jobSaga";
import activeJobSaga from "./activeJobSaga";
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    jobSaga(),
    applicationSaga(),
    recruiterSaga(),
    activeJobSaga(),
  ]);
}

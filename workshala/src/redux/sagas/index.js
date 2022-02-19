import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import recruiterSaga from "./recruiterSaga";
import applicationSaga from "./applicationSaga";
import jobSaga from "./jobSaga";

export default function* rootSaga() {
  yield all([userSaga(), jobSaga(), applicationSaga(), recruiterSaga()]);
}

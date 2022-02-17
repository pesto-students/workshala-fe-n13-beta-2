import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import recruiterSaga from "./recruiterSaga";

export default function* rootSaga() {
  yield all([userSaga()]);
  yield all([recruiterSaga()]);
}

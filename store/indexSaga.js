import { all } from "redux-saga/effects";
import rootDefaultFetch from "./sagas/fetchMoviesSaga";

export default function* indexSaga() {
  yield all([rootDefaultFetch()]);
}

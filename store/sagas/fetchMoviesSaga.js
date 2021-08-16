import { put, takeLatest, call, all } from "redux-saga/effects";
import {
  FETCH_DEFAULT_MOVIES_FULFILLED,
  FETCH_DEFAULT_MOVIES_REJECTED,
  FETCH_DEFAULT_MOVIES_REQUEST,
} from "../../utils/constant";
import Api from "../api/api";

function* fetchMovies({ payload }) {
  try {
    const { data } = yield call(Api.get, payload);
    if (data.Response === "True") {
      yield put({
        type: FETCH_DEFAULT_MOVIES_FULFILLED,
        payload: { movies: data.Search, count: data.totalResults },
      });
    } else yield put({ type: FETCH_DEFAULT_MOVIES_REJECTED, payload: "error" });
  } catch (error) {
    yield put({ type: FETCH_DEFAULT_MOVIES_REJECTED, payload: "error" });
  }
}

export default function* rootAlerts() {
  yield all([takeLatest(FETCH_DEFAULT_MOVIES_REQUEST, fetchMovies)]);
}

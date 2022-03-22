import {
  all,
  put,
  folk,
  takeLatest,
  call,
  put,
  take,
} from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function* loginAPI() {
  // 서버에 요청 보냄
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      // put == dispatch
      type: LOGIN_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

function* helloSaga() {
  yield take(HELLO_SAGA); // take 함수 안에 next가 들어있음
  console.log("hello saga");
}

export default function* userSaga() {
  yield all([fork(watchLogin)], helloSaga());
}

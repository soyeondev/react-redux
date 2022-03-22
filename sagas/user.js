import {
  all,
  put,
  folk,
  takeLatest,
  takeEvery,
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
    yield fork(logger); // logger는 내 기록을 로깅하는 함수로 10초 걸림
    yield call(loginAPI);
    yield put({
      // put == dispatch
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
    });
  }
}

function* watchLogin() {
  while (true) {
    yield take(LOG_IN); // LOG_IN 액션을 받으면
    yield put({
      // 자동으로 put안에 있는 LOG_ING_SUCCESS 가 실행됨
      // put은 saga의 dispatch
      type: LOG_IN_SUCCESS,
    });
  }
}

// function* watchHello() {
//   console.log("before saga");
//   // for(let i = 0; i < 5; i++) -> for문 사용가능
//   while (true) {
//     // while을 사용할 경우 dispatch를 여러번해도 함수가 종료되지 않음
//     // while을 사용하지 않으면 액션을 한번만 실행하고 함수가 종료됨
//     yield take(HELLO_SAGA); // take 함수 안에 next가 들어있음
//     console.log("hello saga");
//   }
// }

// function* watchHello() {
//   while (true) {
//     yield take(HELLO_SAGA);
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//   }
// }

function* watchHello() {
  yield takeLatest(HELLO_SAGA, function* () {
    yield put({
      type: "BYE_SAGA",
    });
  });
}

export default function* userSaga() {
  // 여러 액션을 리스닝 할 수 있도록 만들
  yield all([fork(watchHello), fork(watchLogin), fork(watchSignup)]);
}

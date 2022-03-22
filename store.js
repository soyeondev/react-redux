const { createStore, applyMiddleware, compose } = require('redux');
const {composeWithDevTools} = require("redux-devtools-extension");
// const reducer = require('./reducers/reducer')
const { addPost } = require('./actions/post')
const { logIn, logOut } = require('./actions/user')
const combineReducer = require('./reducers/index');

const prevState = {
    user: {
        isLoggingIn: false,
        data: null,
    },
    posts: [],
};

// initialState.compA = 'b' (x) -> 편하게 바꿀 수 있는 방법을 포기함
// 이렇게 한다면 값을 추적할 수 없음
const firstMiddleware = (store) => (next) => (action) => {
    console.log('action 시작', action);
    // 기능 추가
    next(action); 
    // 기능 추가
    // console.log('action 끝', action);
};

const thunkMiddleware = (store) => (next) => (action) => {
    // console.log("action 1: ", action)
    if(typeof action === 'function'){ // 비동기
        // console.log("action 2: ", action)
        return action(store.dispatch, store.getState);
    }
    return next(action);
};

// 고차함수
// function firstMiddleware (store) {
//     return function (next) {
//         return function (action) {
//             return "??";
//         }
//     }
// }
const enhancer = composeWithDevTools(
    applyMiddleware(
        firstMiddleware,
        thunkMiddleware,
    )
);

const store = createStore(combineReducer, prevState, enhancer);
store.subscribe(() => {
    console.log('changed'); // 화면 바꿔주는 코드
})

console.log("0st: ", store.getState());


// store.dispatch(logIn({
//     id: 1,
//     name: 'zerocho',
//     admin: true,
// }))
// console.log("1nd: ", store.getState());

// store.dispatch(addPost({
//     userId: 1,
//     id: 1,
//     content: '안녕하세요 리덕스',
// }))
// console.log("2nd: ", store.getState());
// store.dispatch(addPost({
//     userId: 1,
//     id: 2,
//     content: '잘가요 리덕스',
// }))
// console.log("3nd: ", store.getState());

// store.dispatch(logOut());
// console.log("4nd: ", store.getState());

module.exports = store;
const produce = require("immer");

const initialState = {
  isLoggingIn: false,
  data: null,
};

// nextState = produce(prevState, (draft) => {});

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

// action을 받아서 새로운 state를 만들어 줌
const userReducer = (prevState = initialState, action) => {
  // 새로운 state 만들어주기
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN":
        return {
          ...prevState,
          data: action.data,
        };
      case "LOG_OUT":
        draft.data = null;
        break;
      // return {
      //     data: null
      // }
      case "LOG_IN_REQUEST":
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      // return {
      //     ...prevState,
      //     isLoggingIn: true,
      // }
      case "LOG_IN_SUCCESS":
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      // return {
      //     ...prevState,
      //     data: action.data,
      //     isLoggingIn: false,
      // }
      case "LOG_IN_FAILURE":
        draft.data = null;
        break;
      // return {
      //     ...prevState,
      //     data: null,
      // }
      default:
        return prevState; // 오타날 경우를 대비해서 default를 작성해야함
    }
  });
};

module.exports = userReducer;

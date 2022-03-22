const logInRequest = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data: data,
    };
};
const logInSuccess = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    };
};
const logInFailure = (error) => {
    return {
        type: 'LOG_IN_FAILURE',
        error,
    };
};

const logIn = (data) => {
    console.log("logIn 1: ", data);
    return (dispatch, getState) => {
        console.log("logIn 2: ", dispatch);
        dispatch(logInRequest(data));
        try {
            setTimeout(() => {
                console.log("logIn 3: ", dispatch);
                dispatch(logInSuccess({
                    id: 'zerocho',
                    nickname: 'babo',
                }));
            }, 2000);
        } catch(e) {

        }
    };
};

const logOut = () => {
    return {
        type: 'LOG_OUT',
    };
};

module.exports = {
    logIn,
    logOut,
}
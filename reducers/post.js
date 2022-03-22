const produce = require('immer');
const initialState = [];


const postReducer = (prevState = initialState, action) => { // 새로운 state 만들어주기
    const postReducer = (prevState = initialState, action) => {
        return produce(prevState, (draft) => {
            switch(action.type) {
                case 'ADD_POST':
                    draft.push(action.data);
                    // return [...prevState, action.data];
                    break;                    
                default:
                    break;
                    // return prevState // 오타날 경우를 대비해서 default를 작성해야함
            }
        });
    }    
};

module.exports = postReducer;
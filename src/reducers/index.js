import {combineReducers} from 'redux';

const uploader = (state = {}, action) => {
    switch (action.type) {
        case "UPLOADER":
            return {
                file: action.file
            };
        default:
            return state;
    }
};

const reducers = combineReducers({
    uploader,
});


export default reducers

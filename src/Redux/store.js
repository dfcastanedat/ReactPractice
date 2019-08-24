import { createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = (state={}, action) => {

    switch (action.type) {
        default:
            return {
                ...state
            };
        case "CHANGE_COLOR":
            return {
                ...state,
                color: state.color.replace(state.color ,action.color)
            }
    }
};

export default createStore(reducer, {color:""}, composeWithDevTools(applyMiddleware(), persistState()));
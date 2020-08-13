import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import bookReducer from '../reducers/bookReducer';
import thunk from 'redux-thunk';


// let reducers = combineReducers({
//     bookPage: bookReducer


// });

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENCION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        bookPage: bookReducer }),
         composeEnhacer(applyMiddleware(thunk))
);

window.store = store;

export default store;
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import bookReducer from '../reducers/bookReducer';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/CartReducer';


// let reducers = combineReducers({
//     bookPage: bookReducer


// });

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        bookPage: bookReducer, 
        cartPage: cartReducer}),
         composeEnhacer(applyMiddleware(thunk))
);

window.store = store;

export default store;
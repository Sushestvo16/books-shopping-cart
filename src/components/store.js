import {createStore, combineReducers} from 'redux';
import bookReducer from '../reducers/bookReducer';


let reducers = combineReducers({
    bookPage: bookReducer


});


let store = createStore(reducers);

window.store = store;

export default store;
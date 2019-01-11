import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxMulti from 'redux-multi';
import combineReducers from './combineReducers';

const store = createStore(combineReducers, applyMiddleware(reduxThunk, reduxMulti));

export default store;
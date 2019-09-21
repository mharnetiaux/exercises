import apiMiddleware from '../middleware/api';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));

export default store;

import getMessagesMiddleware from '../middleware/getMessages';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';

const store = createStore(rootReducer, applyMiddleware(getMessagesMiddleware));

console.log('Store initialized.');
console.log(store.getState());

export default store;

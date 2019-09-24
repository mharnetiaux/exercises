import getMessagesMiddleware from '../middleware/getMessages';
import updateMessagesMiddleware from '../middleware/updateMessages';
import { createStore, applyMiddleware } from 'redux';
import messagesReducer from '../reducers/messages/index';

const store = createStore(
    messagesReducer,
    applyMiddleware(getMessagesMiddleware,
        updateMessagesMiddleware));

console.log(`Redux: store initialized. ${'\u221A'}`);

export default store;

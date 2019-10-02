import getMessagesMiddleware from '../../middleware/messages/getStore';
import updateMessagesMiddleware from '../../middleware/messages/updateStore';
import { createStore, applyMiddleware } from 'redux';
import messagesReducer from '../../reducers/messages';

const messagesStore = createStore(
    messagesReducer,
    applyMiddleware(
        getMessagesMiddleware,
        updateMessagesMiddleware
    ));

console.log(`Redux ${ '\u2192' } store ${ '\u2192' } store initialized ${ '\u2192' } store: {} ${'\u221A'}`);

export default messagesStore;

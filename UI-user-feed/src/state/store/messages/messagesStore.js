import getMessagesMiddleware from '../../middleware/messages/getArrayObjs';
import updateMessagesMiddleware from '../../middleware/messages/updateArrayObjs';
import { createStore, applyMiddleware } from 'redux';
import messagesReducer from '../../reducers/messages';

const messagesStore = createStore (
    messagesReducer,
    applyMiddleware(
        getMessagesMiddleware,
        updateMessagesMiddleware
    ));

console.log(`Redux store ${ '\u2192' } store created ${'\u221A'} ${ '\u2192' } store: {} ${'\u221A'}`);

export default messagesStore;

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import messagesReducer from '../../reducers/messages';

const messagesStore = createStore(
    messagesReducer,
    applyMiddleware((thunk)));

console.log(`Redux ${ '\u2192' } store ${ '\u2192' } store initialized ${ '\u2192' } store: {} ${'\u221A'}`);

export default messagesStore;

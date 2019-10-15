import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import messagesReducer from '../../reducers/messages';

const messagesStore = createStore(
    messagesReducer,
    applyMiddleware((thunk)));
    console.log(`Redux ${ '\u2192' } store:messages ${ '\u2192' } initialized ${ '\u2192' } messages: [] ${'\u221A'}`);

export default messagesStore;

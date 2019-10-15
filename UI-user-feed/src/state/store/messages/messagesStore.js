import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import messagesReducer from '../../reducers/messages';

const messagesStore = createStore(
    messagesReducer,
    applyMiddleware((thunk)));

export default messagesStore;

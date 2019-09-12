import { combineReducers } from 'redux';
import { messages, messagesError, messagesLoading } from './messages.js';

export default combineReducers({
    messages
});

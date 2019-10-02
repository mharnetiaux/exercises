import { combineReducers } from 'redux';
import { messages, url } from './getMessages';

export default combineReducers({ messages, url });

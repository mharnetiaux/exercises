import { combineReducers } from 'redux';
import { getMessages, url } from './getMessages';

export default combineReducers({ messages: getMessages, url });

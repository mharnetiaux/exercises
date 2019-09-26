import { MESSAGES_SEND_DATA_SUCCESS } from "../actions/types";
import { messagesSendData } from '../actions/messages'

const updateMessagesMiddleware = store => next => action => {
    next(action);
    if (action.type !== MESSAGES_SEND_DATA_SUCCESS) return;
    console.log(store.getState());
};
export default updateMessagesMiddleware;

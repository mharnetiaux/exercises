import { MESSAGES_SEND_DATA_SUCCESS } from "../actions/types";
import { messagesUpdateDataSuccess } from "../actions/messages";

const updateMessagesMiddleware = store => next => action => {
    next(action);

    if (action.type !== MESSAGES_SEND_DATA_SUCCESS) return;
    const newMessage = { 'value': action.input } || '';
    const newMessageObj = [];

    action.messages.map((messages) => {
        newMessageObj.push(messages);
    });
    newMessageObj.push(newMessage);

    store.dispatch(messagesUpdateDataSuccess(newMessageObj));
};
export default updateMessagesMiddleware;

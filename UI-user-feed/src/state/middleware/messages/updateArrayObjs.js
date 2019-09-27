import { MESSAGES_SEND_STORE_SUCCESS } from "../../actions/types";
import { messagesUpdateStoreSuccess } from "../../actions/messages/getMessages";

const updateMessagesMiddleware = store => next => action => {
    next(action);

    if (action.type !== MESSAGES_SEND_STORE_SUCCESS) return;

    const newMessage = { 'value': action.input } || 'SEND FAILURE';
    const newMessageObj = [];

    action.messages.map((messages) => {
        newMessageObj.push(messages);
    });

    newMessageObj.push(newMessage);

    store.dispatch(messagesUpdateStoreSuccess(newMessageObj));
};

export default updateMessagesMiddleware;

import { MESSAGES_SEND_STORE_SUCCESS } from "../../actions/types";
import { messagesUpdateStoreSuccess } from "../../actions/messages/getMessages";

const updateMessagesMiddleware = store => next => action => {
    next(action);

    if (action.type !== MESSAGES_SEND_STORE_SUCCESS) return;
    console.log(`Redux ${ '\u2192' } middleware ${'\u2192'} MESSAGES_SEND_STORE_SUCCESS ${ '\u221A' }`);

    const newMessage = { 'value': action.input } || 'SEND FAILURE';
    const newMessageObj = [];

    action.messages.map((messages) => {
        newMessageObj.push(messages);
    });

    newMessageObj.push(newMessage);

    store.dispatch(messagesUpdateStoreSuccess(newMessageObj));
    console.log(store.getState());
};

export default updateMessagesMiddleware;

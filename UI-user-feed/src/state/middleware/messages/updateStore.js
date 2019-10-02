import { MESSAGES_SEND_STORE_SUCCESS } from "../../actions/types";
import { messagesUpdateStoreSuccess } from "../../actions/messages";

const updateMessagesMiddleware = store => next => action => {
    next(action);

    if (action.type !== MESSAGES_SEND_STORE_SUCCESS) return;
    console.log(`Redux ${ '\u2192' } middleware ${'\u2192'} MESSAGES_SEND_STORE_SUCCESS ${ '\u221A' }`);

    const newMessage = {
        "user": "User 1",
        "value": action.input,
        "id": 1,
        "timestamp": "1502580722572",
        "timeZoneOffset": "300",
        "likes": 3
    } || 'SEND FAILURE';
    const newMessageObj = [];

    action.messages.map((messages) => {
        newMessageObj.push(messages);
    });

    newMessageObj.push(newMessage);

    store.dispatch(messagesUpdateStoreSuccess(newMessageObj));
    console.log(store.getState());
};

export default updateMessagesMiddleware;

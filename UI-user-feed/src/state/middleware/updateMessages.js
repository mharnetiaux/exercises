import { MESSAGES_SEND_DATA_SUCCESS } from "../actions/types";

const updateMessagesMiddleware = store => next => action => {
    next(action);
    if (action.type !== MESSAGES_SEND_DATA_SUCCESS) return;
    /// !!!!!!!!! THIS IS WHERE YOU MAKE CHANGES TO STORE AND THEN DISPATCH EVENT !!!!!!!!!
    console.log(action.messages);
    console.log(action.input);

    console.log(store.getState());
};
export default updateMessagesMiddleware;

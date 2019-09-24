import { API_UPDATE_DATA_SUCCESS } from "../actions/types";

const updateMessagesMiddleware = store => next => action => {
    next(action);
    if (action.type !== API_UPDATE_DATA_SUCCESS) return;
    store.dispatch(console.log('Redux Middleware: API_UPDATE_DATA_SUCCESS called.'));
};
export default updateMessagesMiddleware;

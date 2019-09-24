import { API_START_FETCH } from "../actions/types";
import { apiFetchDataSuccess } from "../actions/messages";
const getMessagesMiddleware = store => next => action => {
    next(action);
    if (action.type !== API_START_FETCH) return;

    fetch(action.url)
        .then((response) => {
            console.log(`Middleware: Http Get response: ${ response.status } ${ response.ok }. ${ '\u221A' }`);
            return response.json();
        })
        .then((messages) => {
            messages = messages['feed'];
            store.dispatch(apiFetchDataSuccess(messages));
        })
        .catch((response) => {
            console.log(`Get error: ${ response } ${ '\u221A' }`);
            throw Error(`${ response }`);
        });
};
export default getMessagesMiddleware;

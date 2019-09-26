import { API_GET_DATA_START } from "../actions/types";
import { apiGetDataSuccess } from "../actions/messages";

const getMessagesMiddleware = store => next => action => {
    next(action);
    if (action.type !== API_GET_DATA_START) return;
    console.log(`Redux middleware ${'\u2192'} API_START_GET ${ '\u221A' }`);

    fetch(action.url)
        .then((response) => {
            console.log(`Redux middleware ${'\u2192'} HTTP response ${'\u2192'} ${ response.status } ${ response.ok } ${ '\u221A' }`);
            return response.json();
        })
        .then((messages) => {
            messages = messages['feed'];
            store.dispatch(apiGetDataSuccess(messages));
        })
        .catch((response) => {
            console.log(`Redux middleware ${'\u2192'} HTTP ERROR ${'\u2192'} ${ response } ${ '\u221A' }`);
            throw Error(`${ response }`);
        });
};
export default getMessagesMiddleware;

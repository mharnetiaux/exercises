import { API_START_FETCH } from "../actions/types";
import { logClientMounted } from '../../utils/http/initStateSuccess.js';
import { apiFetchDataSuccess } from "../actions/messages";
const apiMiddleware = store => next => action => {

    next(action);

    if (action.type !== API_START_FETCH) return;

    fetch(action.url)
        .then((response) => {
            console.log(`Fetch response: ${ response.status } ${ response.ok } ${ '\u221A' }`);
            return response.json();
        })
        .then((messages) => {
            messages = messages['feed'];
            logClientMounted(messages);
            store.dispatch(apiFetchDataSuccess(messages));
        })
        .catch((response) => {
            console.log(`Fetch error: ${ response } ${ '\u221A' }`);
            throw Error(`${ response }`);
        });

};

export default apiMiddleware;

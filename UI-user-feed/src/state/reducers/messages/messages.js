import {
    FETCH_MESSAGES_SUCCESS,
    MESSAGES_UPDATE_SUCCESS,
    // GET_LOCAL_STORAGE_SUCCESS,
    // LOCAL_STORAGE_SAVE_SUCCESS
} from "../../actions/types";

export function messages(store = [], action) {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            console.log(`Redux ${ '\u2192' } reducer ${ '\u2192' } FETCH_DATA_SUCCESS ${ '\u221A' }`);
            console.log(`Redux store populated: {...} ${ '\u221A' }`);
            return action.messages['feed'];

        case MESSAGES_UPDATE_SUCCESS:
            console.log(`Redux ${ '\u2192' } reducer ${ '\u2192' } MESSAGES_UPDATE_SUCCESS ${ '\u221A'  }`);
            return action.messages;

       /* case GET_LOCAL_STORAGE_SUCCESS:
            console.log(`reducer ${'\u2192'} GET_LOCAL_STORAGE_SUCCESS ${'\u221A'}`);
            return action.getMessages;

        case LOCAL_STORAGE_SAVE_SUCCESS:
            console.log(`reducer ${'\u2192'} LOCAL_STORAGE_SAVE_SUCCESS ${'\u221A'}`);
            return action.getMessages;*/

        default:
            return store;
    }
}

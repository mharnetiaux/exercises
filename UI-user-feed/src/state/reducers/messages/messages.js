import {
    FETCH_DATA_SUCCESS,
    MESSAGES_UPDATE_SUCCESS,
    // GET_LOCAL_STORAGE_SUCCESS,
    // LOCAL_STORAGE_SAVE_SUCCESS
} from "../../actions/types";

const initialState = {};

export function messages(store = initialState.messages, action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            console.log(`Redux ${ '\u2192' } reducer ${ '\u2192' } FETCH_DATA_SUCCESS ${ '\u221A' }`);
            console.log(`Redux store populated: {...} ${ '\u221A' }`);
            return action.messages;

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

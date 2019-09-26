import {
    API_START_FETCH,
    API_FETCH_DATA_SUCCESS,
    MESSAGES_SEND_DATA_SUCCESS,
    MESSAGES_UPDATE_DATA_SUCCESS,
    FETCH_LOCAL_STORAGE_SUCCESS,
    LOCAL_STORAGE_SAVE_SUCCESS
} from "../../actions/types";

const initialState = {
    messages: [],
    url: ''
};

export function messages(store = initialState.messages, action) {
    switch (action.type) {
        case API_FETCH_DATA_SUCCESS:
            console.log(`reducer ${'\u2192'} API_FETCH_DATA_SUCCESS ${'\u221A'}`);
            return action.messages;

        case MESSAGES_SEND_DATA_SUCCESS:
            console.log(`reducer ${'\u2192'} MESSAGES_SEND_DATA_SUCCESS ${'\u221A'}`);
            console.log(action.input);
            return action.messages;

        case MESSAGES_UPDATE_DATA_SUCCESS:
            console.log(`reducer ${'\u2192'} API_UPDATE_DATA_SUCCESS ${'\u221A'}`);
            return action.messages;

        case FETCH_LOCAL_STORAGE_SUCCESS:
            console.log(`reducer ${'\u2192'} FETCH_LOCAL_STORAGE_SUCCESS ${'\u221A'}`);
            return action.messages;

        case LOCAL_STORAGE_SAVE_SUCCESS:
            console.log(`reducer ${'\u2192'} LOCAL_STORAGE_SAVE_SUCCESS ${'\u221A'}`);
            return action.messages;

        default:
            return store;
    }
}

export function url(store = initialState.url, action) {
    switch (action.type) {
        case API_START_FETCH:
            console.log(`reducer ${'\u2192'} API_START_FETCH ${'\u221A'}`);
            return action.url;

        default:
            return store;
    }
}

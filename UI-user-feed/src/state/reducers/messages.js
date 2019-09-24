import {
    API_START_FETCH,
    API_FETCH_DATA_SUCCESS,
    API_SEND_DATA_SUCCESS,
    FETCH_LOCAL_STORAGE_SUCCESS,
    LOCAL_STORAGE_SAVE_SUCCESS
} from "../actions/types";

const initialState = {
    messages: [],
    url: ''
};

export function messages(store = initialState.messages, action) {
    switch (action.type) {
        case API_FETCH_DATA_SUCCESS:
            console.log('Redux reducer: API_FETCH_DATA_SUCCESS called.');
            return action.messages;

        case API_SEND_DATA_SUCCESS:
            console.log('Redux reducer: API_SEND_DATA_SUCCESS called.');
            return action.messages;

        case FETCH_LOCAL_STORAGE_SUCCESS:
            console.log('Redux reducer: FETCH_LOCAL_STORAGE_SUCCESS called.');
            return action.messages;

        case LOCAL_STORAGE_SAVE_SUCCESS:
            console.log('Redux reducer: LOCAL_STORAGE_SAVE_SUCCESS called.');
            return action.messages;

        default:
            return store;
    }
}

export function url(store = initialState.url, action) {
    switch (action.type) {
        case API_START_FETCH:
            console.log('Redux reducer: API_START_FETCH called.');
            return action.url;

        default:
            return store;
    }
}

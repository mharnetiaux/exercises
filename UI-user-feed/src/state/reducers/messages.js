import {
    API_START_FETCH,
    API_FETCH_DATA_SUCCESS,
    API_SEND_DATA_SUCCESS,
    FETCH_LOCAL_STORAGE_SUCCESS,
    LOCAL_STORAGE_SAVE_SUCCESS
} from "../actions/types";

export function messages(state = [], action) {
    switch (action.type) {
        case API_FETCH_DATA_SUCCESS:
            return action.messages;

        case API_SEND_DATA_SUCCESS:
            return action.messages;

        case FETCH_LOCAL_STORAGE_SUCCESS:
            return action.messages;

        case LOCAL_STORAGE_SAVE_SUCCESS:
            return action.messages;

        default:
            return state;
    }
}

export function api(state = '', action) {
    switch (action.type) {
        case API_START_FETCH:
            return action.url;

        default:
            return state;
    }
}

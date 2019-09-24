import {
    API_START_FETCH,
    API_FETCH_DATA_SUCCESS,
    API_UPDATE_DATA_SUCCESS,
    API_SEND_DATA_SUCCESS,
    FETCH_LOCAL_STORAGE_SUCCESS,
    LOCAL_STORAGE_SAVE_SUCCESS
} from "../actions/types";

export function apiFetchData(url) {
    console.log(`Redux action ${'\u2192'} API_START_FETCH called. ${'\u221A'}`);
    return {
        type: API_START_FETCH,
        url: url
    }
}

export function apiFetchDataSuccess(messages) {
    console.log(`Redux action ${'\u2192'} API_FETCH_DATA_SUCCESS called. ${'\u221A'}`);
    return {
        type: API_FETCH_DATA_SUCCESS,
        messages: messages
    }
}

export function messageSaveLocalStorage(messages) {
    return {
        type: LOCAL_STORAGE_SAVE_SUCCESS,
        // messages: localStorage.setItem('messages', JSON.stringify(messages))
        messages: messages
    }
}

export function messagesFetchLocalStorage(messages) {
    return {
        type: FETCH_LOCAL_STORAGE_SUCCESS,
        // messages: JSON.parse(localStorage.getItem('messages'))
        messages: messages
    }
}

export function messagesSendData(messages, input) {
    console.log(`Redux action ${'\u2192'} API_SEND_DATA_SUCCESS called. ${'\u221A'}`);
    return {
        type: API_SEND_DATA_SUCCESS,
        messages: messages,
        input: input
    }
}

export function messagesUpdateData(messages) {
    console.log(`Redux action ${'\u2192'} API_UPDATE_DATA_SUCCESS called. ${'\u221A'}`);
    return {
        type: API_UPDATE_DATA_SUCCESS,
        messages: messages
    }
}

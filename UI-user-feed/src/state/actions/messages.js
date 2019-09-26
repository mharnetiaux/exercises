import {
    API_GET_DATA_START,
    API_GET_DATA_SUCCESS,
    MESSAGES_UPDATE_DATA_SUCCESS,
    MESSAGES_SEND_DATA_SUCCESS,
    FETCH_LOCAL_STORAGE_SUCCESS,
    LOCAL_STORAGE_SAVE_SUCCESS
} from "../actions/types";

export function apiGetDataStart(url) {
    console.log(`action ${ '\u2192' } API_GET_DATA_START ${ '\u221A' }`);
    return {
        type: API_GET_DATA_START,
        url: url
    }
}

export function apiGetDataSuccess(messages) {
    console.log(`action ${ '\u2192' } API_GET_DATA_SUCCESS ${ '\u221A' }`);
    return {
        type: API_GET_DATA_SUCCESS,
        messages: messages
    }
}

export function messagesSendData(messages, input) {
    console.log(`action ${ '\u2192' } MESSAGES_SEND_DATA_SUCCESS ${ '\u221A' }`);
    return {
        type: MESSAGES_SEND_DATA_SUCCESS,
        messages: messages,
        input: input
    }
}

export function messagesUpdateDataSuccess(messages) {
    console.log(`action ${ '\u2192' } MESSAGES_UPDATE_DATA_SUCCESS ${ '\u221A' }`);
    return {
        type: MESSAGES_UPDATE_DATA_SUCCESS,
        messages: messages,
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

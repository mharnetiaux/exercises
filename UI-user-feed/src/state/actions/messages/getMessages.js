import {
    API_GET_DATA_START,
    API_GET_DATA_SUCCESS,
    MESSAGES_UPDATE_STORE_SUCCESS,
    MESSAGES_SEND_STORE_SUCCESS,
    // GET_LOCAL_STORAGE_SUCCESS,
    // LOCAL_STORAGE_SAVE_SUCCESS
} from "../types";

export function apiGetDataStart(url) {
    console.log(`Redux ${ '\u2192' } action ${ '\u2192' } API_GET_DATA_START ${ '\u221A' }`);
    return {
        type: API_GET_DATA_START,
        url: url
    }
}

export function apiGetDataSuccess(messages) {
    console.log(`Redux ${ '\u2192' } action ${ '\u2192' } API_GET_DATA_SUCCESS ${ '\u221A' }`);
    return {
        type: API_GET_DATA_SUCCESS,
        messages: messages
    }
}

export function messagesSendStore(messages, input) {
    console.log(`Redux ${ '\u2192' } action ${ '\u2192' } MESSAGES_SEND_STORE_SUCCESS ${ '\u221A' }`);
    return {
        type: MESSAGES_SEND_STORE_SUCCESS,
        messages: messages,
        input: input
    }
}

export function messagesUpdateStoreSuccess(messages) {
    console.log(`Redux ${ '\u2192' } action ${ '\u2192' } MESSAGES_UPDATE_STORE_SUCCESS ${ '\u221A' }`);
    return {
        type: MESSAGES_UPDATE_STORE_SUCCESS,
        messages: messages,
    }
}

/*export function messageSaveLocalStorage(getMessages) {
    return {
        type: LOCAL_STORAGE_SAVE_SUCCESS,
        // getMessages: localStorage.setItem('getMessages', JSON.stringify(getMessages))
        getMessages: getMessages
    }
}

export function getLocalStorageSuccess(getMessages) {
    return {
        type: GET_LOCAL_STORAGE_SUCCESS,
        // getMessages: JSON.parse(localStorage.getItem('getMessages'))
        getMessages: getMessages
    }
}*/

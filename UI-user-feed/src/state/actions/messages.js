import {
    API_GET_DATA_SUCCESS,
    MESSAGES_UPDATE_STORE_SUCCESS,
    // GET_LOCAL_STORAGE_SUCCESS,
    // LOCAL_STORAGE_SAVE_SUCCESS
} from "./types";

export function apiGetMessagesSuccess(messages) {
    console.log(`Redux ${ '\u2192' } action ${ '\u2192' } API_GET_DATA_SUCCESS ${ '\u221A' }`);
    return {
        type: API_GET_DATA_SUCCESS,
        messages: messages
    }
}

export function fetchMessages(url) {
    return dispatch => {
        fetch(url)
            .then((response) => {
                console.log(`Redux ${ '\u2192' } middleware ${'\u2192'} HTTP response ${'\u2192'} ${ response.status } ${ response.ok } ${ '\u221A' }`);
                return response.json();
            })
            .then((messages) => {
                messages = messages['feed'];
                dispatch(apiGetMessagesSuccess(messages));
            })
            .catch((response) => {
                console.log(`Redux ${ '\u2192' } middleware ${'\u2192'} HTTP ERROR ${'\u2192'} ${ response } ${ '\u221A' }`);
                throw Error(`${ response }`);
            });
    }
}

export function sendMessage(messages, input) {
    return dispatch => {
        const newMessage = {
            "user": "User 1",
            "value": input,
            "id": 1,
            "timestamp": "1502580722572",
            "timeZoneOffset": "300",
            "likes": 3
        } || 'SEND FAILURE';
        const newMessageObj = [];

        messages.map((messages) => {
            newMessageObj.push(messages);
        });
        newMessageObj.push(newMessage);
        dispatch(updateMessages(newMessageObj));
    }
}

export function updateMessages(messages) {
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

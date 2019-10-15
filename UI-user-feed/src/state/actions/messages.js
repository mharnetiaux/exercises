import {
    FETCH_MESSAGES_SUCCESS,
    UPDATE_MESSAGES_SUCCESS,
} from "./types";

export function fetchMessages(url) {
    return dispatch => {
        return fetch(url)
        .then((res) => {
            console.log(`Redux ${ '\u2192' } middleware ${'\u2192'} HTTP response ${'\u2192'} ${ res.status } ${ res.ok } ${ '\u221A' }`);
            return res.json();
        })
        .then((messages) => {
            dispatch(fetchMessagesSuccess(messages));
        })
        .catch((response) => {
            console.log(`Redux ${ '\u2192' } middleware ${'\u2192'} HTTP ERROR ${'\u2192'} ${ response } ${ '\u221A' }`);
            throw Error(`${ response }`);
        });
    }
}

export function fetchMessagesSuccess(messages) {
    console.log(`Redux ${ '\u2192' } action ${ '\u2192' } FETCH_MESSAGES_SUCCESS ${ '\u221A' }`);
    return {
        type: FETCH_MESSAGES_SUCCESS,
        messages
    }
}

export function sendMessage(messages, input) {
    return dispatch => {
        dispatch(updateMessages(messages, input));
    }
}

export function updateMessages(messages, input) {
    console.log(`Redux ${ '\u2192' } action ${ '\u2192' } MESSAGES_UPDATE_STORE_SUCCESS ${ '\u221A' }`);
    return {
        type: UPDATE_MESSAGES_SUCCESS,
        messages: messages,
        input: input
    }
}

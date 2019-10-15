import {
    FETCH_MESSAGES_SUCCESS,
    UPDATE_LIKES_SUCCESS,
    UPDATE_MESSAGES_SUCCESS,
} from "./types";

export function fetchMessages(url) {
    return dispatch => {
        return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((messages) => {
            dispatch(fetchMessagesSuccess(messages));
        })
        .catch((response) => {
            throw Error(`${ response }`);
        });
    }
}

export function fetchMessagesSuccess(messages) {
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
    return {
        type: UPDATE_MESSAGES_SUCCESS,
        messages: messages,
        input: input
    }
}

export function sendLike(message) {
    return dispatch => {
        dispatch(updateLikes(message));
    }
}

export function updateLikes(message) {
    return {
        type: UPDATE_LIKES_SUCCESS,
        message: message
    }
}

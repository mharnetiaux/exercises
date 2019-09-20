import { logClientMounted } from '../../utils/http/initStateSuccess.js';

/*export function messagesFetchDataSuccess(messages) {
    return {
        type: 'MESSAGES_FETCH_DATA_SUCCESS',
        messages: messages
    }
}*/

/*export function messagesFetchData(url) {
    return (dispatch) => {

        fetch(url)
        .then((response) => {
            console.log(`Fetch response: ${ response.status } ${ response.ok } ${ '\u221A' }`);
            return response.json();
        })
        .then((messages) => {
            messages = messages['feed'];
            logClientMounted(messages);
            dispatch(messagesFetchDataSuccess(messages));
        })
        .catch((response) => {
            console.log(`Fetch error: ${ response } ${ '\u221A' }`);
            throw Error(`${ response }`);
        });
    };
}*/

/*export function messageSaveLocalStorage(messages) {
    return {
        type: 'MESSAGES_LOCAL_STORAGE_SUCCESS',
        messages: localStorage.setItem('messages', JSON.stringify(messages))
    }
}

export function messagesFetchLocalStorage() {
    return {
        type: 'MESSAGES_FETCH_LOCAL_STORAGE_SUCCESS',
        messages: JSON.parse(localStorage.getItem('messages'))
    }
}

export function messagesSendData(messages, input) {
    messages.push({
        "user": "User 1",
        "value": input,
        "likes": 13
    });
    return {
        type: 'MESSAGES_SEND_DATA_SUCCESS',
        messages: messages
    }
}*/


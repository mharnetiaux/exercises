export function messagesFetchDataSuccess(messages) {
    return {
        type: 'MESSAGES_FETCH_DATA_SUCCESS',
        messages: messages
    }
}

export function messagesFetchData(url) {
    return (dispatch) => {
        fetch(url, {
            method: 'get'
        })
        .then((response) => {
            console.log(`Response: ${response.status} ${response.ok} ${'\u221A'}`);
            return response.json();
        })
        .then((initState) => {
            console.log(`JSON ${'\u2192'} to JavaScript ${'\u221A'}`);
            console.log(`${'\u2666'}${'\u2666'}${'\u2666'} ${'\u21D3'}${'\u21D3'}${'\u21D3'} ${'\u2666'}${'\u2666'}${'\u2666'} ${'\u221A'}`);
            console.log(initState);
            console.log(`${'\u2666'}${'\u2666'}${'\u2666'} ${'\u21D1'}${'\u21D1'}${'\u21D1'} ${'\u2666'}${'\u2666'}${'\u2666'} ${'\u221A'}`);
            dispatch(messagesFetchDataSuccess(initState['feed']));
        })
        .catch((response) => {
            console.log(`Fetch: ${response} ${'\u221A'}`);
            throw Error(`${response}`);
        });
    };
}

export function messageSaveLocalStorage(messages) {
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

export function messagesSendDataSuccess(messages) {
    return {
        type: 'MESSAGES_SEND_DATA_SUCCESS',
        messages: messages
    }
}

export function messagesSendData(messages, input) {
    messages.push({
        "user": "User 1",
        "value": input,
        "likes": 13
    });
    return (dispatch) => {
        dispatch(messagesSendDataSuccess(messages));
    }
}


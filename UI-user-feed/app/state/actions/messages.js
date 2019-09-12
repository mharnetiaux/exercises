export function messagesFetchDataSuccess(messages) {
    return {
        type: 'MESSAGES_FETCH_DATA_SUCCESS',
        messages: messages
    }
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

export function messagesFetchData(url) {
    return (dispatch) => {

        fetch(url, {
            method: 'get'
        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((data) => {
            const messages = [];
            // Orchestrate data to put in state messages
            Object.keys(data.feed).map(item => {
                messages.push(data.feed[item]);
            });
            // Populate state messages
            dispatch(messagesFetchDataSuccess(messages));
        })
        .catch(() => console.log('Error'));
    };
}


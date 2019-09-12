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
            .then((response) => response.json())
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

/*export function messagesSendData(url, data) {
    return (dispatch) => {
        //dispatch(messagesLoading(true));
        fetch(url, {
            method: 'post',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            //dispatch(messagesLoading(false));
            return response;
        })
        .then((response) => response.json())
        .then((data) => {
           console.log("Data was sent: " + data);
        })
        .catch(() => dispatch(messagesError(true)));
    };
}*/


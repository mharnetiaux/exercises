export function messagesError(bool) {
    return {
        type: 'MESSAGES_ERROR',
        error: bool
    }
}

export function messagesLoading(bool) {
    return {
        type: 'MESSAGES_LOADING',
        loading: bool
    }
}

export function messagesFetchDataSuccess(messages) {
    return {
        type: 'MESSAGES_FETCH_DATA_SUCCESS',
        messages: messages
    }
}


export function errorAfterFiveSeconds() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(messagesError(true));
        }, 5000);
    };
}

export function messagesFetchData(url) {
    return (dispatch) => {
        dispatch(messagesLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(messagesLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((obj) => {
                const messages = [];
                // Orchestrate data to put in state messages
                Object.keys(obj.feed).map(item => {
                    messages.push(obj.feed[item]);
                });
                // populate state messages
                dispatch(messagesFetchDataSuccess(messages));
            })
            .catch(() => dispatch(messagesError(true)));
    };
}


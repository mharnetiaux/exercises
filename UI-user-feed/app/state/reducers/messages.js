export function messagesError(state = false, action) {
    switch (action.type) {
        case 'MESSAGES_ERROR':
            return action.error;
        default:
            return state;
    }
}

export function messagesLoading(state = false, action) {
    switch (action.type) {
        case 'MESSAGES_LOADING':
            return action.loading;
        default:
            return state;
    }
}

export function messages(state = [], action) {
    switch (action.type) {
        case 'MESSAGES_FETCH_DATA_SUCCESS':
            return action.messages;
        default:
            return state;
    }
}

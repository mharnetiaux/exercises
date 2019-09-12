export function messages(state = [], action) {
    switch (action.type) {
        case 'MESSAGES_FETCH_DATA_SUCCESS':
            return action.messages;
        case 'MESSAGES_FETCH_LOCAL_STORAGE_SUCCESS':
            return action.messages;
        default:
            return state;
    }
}

import {
    FETCH_MESSAGES_SUCCESS,
    UPDATE_LIKES_SUCCESS,
    UPDATE_MESSAGES_SUCCESS,
} from "../../actions/types";

export function messages(store = [], action) {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            return action.messages['feed'];

        case UPDATE_LIKES_SUCCESS:
            let message = store.indexOf(action.message);
            store[message] = action.message;
            return store;

        case UPDATE_MESSAGES_SUCCESS:
            const newMessage = {
                "user": "User 3",
                "value": action.input,
                "id": 3,
                "timestamp": "1502580722572",
                "timeZoneOffset": "300",
                "likes": 0
            };
            const messages = [];
            action.messages.map((message) => {
                messages.push(message);
            });
            messages.push(newMessage);
            return messages;

        default:
            return store;
    }
}

import {
    FETCH_MESSAGES_SUCCESS,
    UPDATE_LIKES_SUCCESS,
    UPDATE_MESSAGES_SUCCESS,
} from "../../actions/types";

export function messages(store = [], action) {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            console.log(`Redux ${ '\u2192' } reducer ${ '\u2192' } FETCH_DATA_SUCCESS ${ '\u221A' }`);
            console.log(`Redux store populated: {...} ${ '\u221A' }`);
            return action.messages['feed'];

        case UPDATE_LIKES_SUCCESS:
            let message = store.indexOf(action.message);
            store[message] = action.message;
            console.log(`Redux ${ '\u2192' } reducer ${ '\u2192' } UPDATE_LIKES_SUCCESS ${ '\u221A' }`);
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
            console.log(`Redux ${ '\u2192' } reducer ${ '\u2192' } MESSAGES_UPDATE_SUCCESS ${ '\u221A'  }`);
            return messages;

        default:
            return store;
    }
}

import {
    FETCH_MESSAGES_SUCCESS,
    MESSAGES_UPDATE_SUCCESS,
} from "../../actions/types";

export function messages(store = [], action) {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            console.log(`Redux ${ '\u2192' } reducer ${ '\u2192' } FETCH_DATA_SUCCESS ${ '\u221A' }`);
            console.log(`Redux store populated: {...} ${ '\u221A' }`);
            return action.messages['feed'];

        case MESSAGES_UPDATE_SUCCESS:
        const newMessage = {
            "user": "User 1",
            "value": action.input,
            "id": 1,
            "timestamp": "1502580722572",
            "timeZoneOffset": "300",
            "likes": 3
        };
        const newMessageArr = [];

        action.messages.map((messages) => {
            newMessageArr.push(messages);
        });
        newMessageArr.push(newMessage);
        console.log(`Redux ${ '\u2192' } reducer ${ '\u2192' } MESSAGES_UPDATE_SUCCESS ${ '\u221A'  }`);
        return newMessageArr;

        default:
            return store;
    }
}

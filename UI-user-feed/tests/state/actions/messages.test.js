import * as actions from '../../../src/state/actions/messages';
import * as types from '../../../src/state/actions/types';

describe('actions for messages', () => {
    it('should create an action to get API endpoint', () => {
        const url = "https://something.api/";
        const expectedAction = {
            type: types.API_GET_DATA_START,
            url: url
        };
        expect(actions.apiGetDataStart(url)).toEqual(expectedAction)
    });

    it('should create an action to get messages', () => {
        const messages = {};
        const expectedAction = {
            type: types.API_GET_DATA_SUCCESS,
            messages: messages
        };
        expect(actions.apiGetDataSuccess(messages)).toEqual(expectedAction)
    });

    it('should create an action to add messages', () => {
        const messages = {};
        const input = "blah blah blah";
        const expectedAction = {
            type: types.MESSAGES_SEND_STORE_SUCCESS,
            messages: messages,
            input: input
        };
        expect(actions.messagesSendStore(messages, input)).toEqual(expectedAction)
    });

    it('should create an action to save message', () => {
        const messages = {};
        const expectedAction = {
            type: types.MESSAGES_UPDATE_STORE_SUCCESS,
            messages: messages
        };
        expect(actions.messagesUpdateStoreSuccess(messages)).toEqual(expectedAction)
    });
});

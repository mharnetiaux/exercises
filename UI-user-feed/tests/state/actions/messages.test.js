import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/state/actions/messages';
import * as types from '../../../src/state/actions/types';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const url = 'https://raw./UI-user-feed/data.json';
const mockData = {
    "feed": [
        {
            "user": "User 1",
            "value": "Something user 1 would say...",
            "id": 1,
            "timestamp": "1502580722572",
            "timeZoneOffset": "300",
            "likes": 3
        },
        {
            "user": "User 2",
            "value": "Something user 2 did say...",
            "id": 2,
            "timestamp": "1502180722530",
            "timeZoneOffset": "300",
            "likes": 1
        }
    ]
};

describe('Async AJAX:GET messages request.', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('Creates FETCH_MESSAGES_SUCCESS, when fetching messages has been sent, and has a successful response;', () => {
        fetchMock.get(url, mockData);
        const expectedActions = [
            { type: types.FETCH_MESSAGES_SUCCESS, messages: mockData }
        ];
        const store = mockStore(mockData);
        return store.dispatch(actions.fetchMessages(url)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
});

describe('Async send message.', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('Creates MESSAGES_UPDATE_SUCCESS, when message has been changed, and sent.', () => {
        const input = "Hey are you coming to the meeting today?";
        const messages = mockData['feed'];
        const expectedActions = [
            { type: types.UPDATE_MESSAGES_SUCCESS, messages: mockData['feed'], input: input }
        ];
        const store = mockStore(mockData);
        store.dispatch(actions.sendMessage(messages, input));
        expect(store.getActions()).toEqual(expectedActions);
    })
});

describe('Async send like.', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('Creates LIKES_UPDATE_SUCCESS, when like button has been clicked, and updated.', () => {
        const message = {
            "user": "User 3",
            "value":"what's happening",
            "id": 3,
            "timestamp": "1502580722572",
            "timeZoneOffset": "300",
            "likes": 0
        };
        const expectedActions = [
            { type: types.UPDATE_LIKES_SUCCESS, message: message }
        ];
        const store = mockStore(mockData);
        store.dispatch(actions.sendLike(message));
        expect(store.getActions()).toEqual(expectedActions);
    })
});

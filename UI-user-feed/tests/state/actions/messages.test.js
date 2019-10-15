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

describe('async messages get request', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('creates FETCH_MESSAGES_SUCCESS when fetching messages has been done', () => {
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

describe('async send message request', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('creates MESSAGES_UPDATE_SUCCESS when sending a message has been done', () => {
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


describe('async send message request', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('creates LIKES_UPDATE_SUCCESS when users like button is clicked', () => {
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

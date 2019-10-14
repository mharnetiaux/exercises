import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/state/actions/messages';
import * as types from '../../../src/state/actions/types';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
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
            "id": 1,
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
            { type: types.FETCH_MESSAGES_REQUEST },
            { type: types.FETCH_MESSAGES_SUCCESS, messages: mockData }
        ];
        const store = mockStore(mockData);

        return store.dispatch(actions.fetchMessages(url)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
});

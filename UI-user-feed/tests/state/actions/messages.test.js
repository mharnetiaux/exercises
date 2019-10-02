import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/state/actions/messages';
import * as types from '../../../src/state/actions/types';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
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

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('creates FETCH_MESSAGES_SUCCESS when fetching messages has been done', () => {
        const url = "https://www.blah/messages";
        fetchMock.get(url, {
            body: mockData,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = { type: types.FETCH_DATA_SUCCESS, mockData };
        const store = mockStore(mockData);

        return store.dispatch(actions.fetchMessages(url), () => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});

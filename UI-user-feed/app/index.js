import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './state/store/store.js';
import ChatApp from './ChatApp.js';

const store = configureStore();

render(
    <Provider store={store}>
        <ChatApp />
    </Provider>,
    document.getElementById('root')
);

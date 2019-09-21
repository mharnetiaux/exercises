import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './state/store/store';
import ChatApp from './components/ChatApp';

const store = configureStore();

render(
    <Provider store={store}>
        <ChatApp />
    </Provider>,
    document.getElementById('app'));

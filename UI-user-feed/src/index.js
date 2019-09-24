import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store/store';
import ChatApp from './components/ChatApp';

render(
    <Provider store={ store }>
        <ChatApp />
    </Provider>,
    document.getElementById('app'));


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import messagesStore from './state/store/messages/messagesStore';
import ChatApp from './components/Chat';

render(
    <Provider store={ messagesStore }>
        <ChatApp />
    </Provider>,
    document.getElementById('app'));

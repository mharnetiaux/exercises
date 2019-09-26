import '../styles/less/styles.less'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { messagesEndPoint } from '../utils/api/messageEndPoint';
import SendMessage from './SendMessage.js';
import Message from './Message'
import {
    apiGetDataStart,
    // messageSaveLocalStorage,
    // getLocalStorage,
    messagesSendStore } from '../state/actions/messages';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.sendLike = this.sendLike.bind(this);
    }

    sendMessage(input, messages) {
        messages = this.props.messages;
        this.props.updateMessages(messages, input); // Update store messages on submitting new message
        // this.props.updateLocalStorage(getMessages);
    }

    sendLike(like, index) {
        const likes = this.props.messages[index];
        const messages = this.props.messages;
        messages[index].likes = like;
        // this.props.updateLocalStorage(getMessages);
    }

    componentDidMount() {
        if(localStorage && localStorage.getItem('messages')) {
            console.log(`React componentDidMount ${ '\u221A' }  ${ '\u2192' }`);
            // this.props.getLocalStorage(getMessages); // Call Local Storage after first Get request
        }else {
            console.log(`React componentDidMount ${ '\u221A' }`);
            this.props.getMessages(messagesEndPoint); // Make GET request once ChatApp is rendered
        }
    }

    render() {
        const { messages } = this.props;
        const messageCount = messages.length;
        return (
            <main>
                <header><h2 className="messageCount">( Messages <span>{ messageCount } )</span>...</h2></header>
                <section>
                    <Message messages={ messages } sendLike={ this.sendLike } />
                </section>
                <footer>
                    <SendMessage sendMessage={ this.sendMessage } />
                </footer>
            </main>
        );
    }
}

ChatApp.propTypes = {
    messages: PropTypes.array.isRequired,
    getMessages:  PropTypes.func.isRequired,
    // getLocalStorage:  PropTypes.func.isRequired,
    // updateLocalStorage: PropTypes.func.isRequired,
    updateMessages: PropTypes.func.isRequired
};

const mapStoreToProps = (store) => {
    return store;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (url) => dispatch(apiGetDataStart(url)),
        updateMessages: (messages, input) => dispatch(messagesSendStore(messages, input)),
        // getLocalStorage: (getMessages) => dispatch(getLocalStorage(getMessages)),
        //updateLocalStorage: (getMessages) => dispatch(messageSaveLocalStorage(getMessages)),
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ChatApp);

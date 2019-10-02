import '../styles/less/styles.less'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { messagesEndPoint } from '../utils/api/messageEndPoint';
import SendMessage from './SendMessage.js';
import Message from './Message'
import {
    fetchMessages,
    // messageSaveLocalStorage,
    // getLocalStorage,
    sendMessage } from '../state/actions/messages';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.sendLike = this.sendLike.bind(this);
    }

    sendMessage(input, messages) {
        messages = this.props.messages;
        // Update store messages on submitting new message
        this.props.updateMessages(messages, input);
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
            console.log(`React ${ '\u2192' } life cycle ${ '\u2192' } componentDidMount(); ${ '\u221A' }`);
            // this.props.getLocalStorage(getMessages); // Call Local Storage after first Get request
        }else {
            console.log(`React ${ '\u2192' } life cycle ${ '\u2192' } componentDidMount(); ${ '\u221A' }`);
            this.props.fetchMessages(messagesEndPoint); // Make GET request once ChatApp is rendered
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
    fetchMessages:  PropTypes.func.isRequired,
    // getLocalStorage:  PropTypes.func.isRequired,
    // updateLocalStorage: PropTypes.func.isRequired,
    updateMessages: PropTypes.func.isRequired
};

const mapStoreToProps = (store) => {
    return store;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: (url) => dispatch(fetchMessages(url)),
        updateMessages: (messages, input) => dispatch(sendMessage(messages, input)),
        // getLocalStorage: (getMessages) => dispatch(getLocalStorage(getMessages)),
        //updateLocalStorage: (getMessages) => dispatch(messageSaveLocalStorage(getMessages)),
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ChatApp);

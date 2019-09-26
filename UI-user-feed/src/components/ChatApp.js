import '../styles/less/styles.less'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { messagesEndPoint } from '../utils/api/messageEndPoint';
import Message from './Message'
import SendMessage from './SendMessage.js';
import {
    apiGetDataStart,
    messageSaveLocalStorage,
    messagesFetchLocalStorage,
    messagesSendData } from '../state/actions/messages';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.sendLike = this.sendLike.bind(this);
    }

    sendMessage(input, messages) {
        messages = this.props.messages;
        this.props.updateMessages(messages, input); // Update state messages on submitting new message
        // this.props.updateLocalStorage(messages);
    }
    // Update state messages property on submit
    sendLike(like, index) {
        const likes = this.props.messages[index];
        const messages = this.props.messages;
        messages[index].likes = like;
        // this.props.updateLocalStorage(messages);
    }

    componentDidMount() {
        const messages = this.props.messages;
        if(localStorage && localStorage.getItem('messages')) {
            console.log(`react render ${ '\u221A' }  ${ '\u2192' } componentDidMount ${ '\u221A' }  ${ '\u2192' }`);
            this.props.fetchLocalStorage(messages); // Call Local Storage after first Get request
        }else {
            console.log(`react render ${ '\u221A' } ${ '\u2192' } componentDidMount ${ '\u221A' }`);
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
    fetchLocalStorage:  PropTypes.func.isRequired,
    updateLocalStorage: PropTypes.func.isRequired,
    updateMessages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const { messages } = state;
    return { messages };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (url) => dispatch(apiGetDataStart(url)),
        fetchLocalStorage: (messages) => dispatch(messagesFetchLocalStorage(messages)),
        updateLocalStorage: (messages) => dispatch(messageSaveLocalStorage(messages)),
        updateMessages: (messages, input) => dispatch(messagesSendData(messages, input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);

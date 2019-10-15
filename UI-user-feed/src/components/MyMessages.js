import '../styles/less/styles.less'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { messagesEndPoint } from '../utils/api/messageEndPoint';
import SendMessage from './SendMessage.js';
import Message from './Message'
import { fetchMessages, sendMessage, sendLike } from '../state/actions/messages';

class MyMessages extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.sendLike = this.sendLike.bind(this);
    }

    sendMessage(input, messages) {
        messages = this.props.messages;
        this.props.sendMessage(messages, input);
    }

    sendLike(likes, index) {
        const message = this.props.messages[index];
        message.likes = likes;
        this.props.sendLike(message);
    }

    componentDidMount() {
        this.props.fetchMessages(messagesEndPoint);
    }

    render() {
        const { messages } = this.props;
        const messageCount = messages.length;
        return (
            <main>
                <header>
                    <h2 className="messageCount">( Messages <span>{ messageCount } )</span>...</h2>
                </header>
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

MyMessages.propTypes = {
    fetchMessages:  PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    sendMessage: PropTypes.func.isRequired
};

const mapStoreToProps = (store) => {
    return store;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: (url) => dispatch(fetchMessages(url)),
        sendLike: (message) => dispatch(sendLike(message)),
        sendMessage: (messages, input) => dispatch(sendMessage(messages, input)),
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(MyMessages);

import './styles/less/styles.less'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { messagesFetchData, messageSaveLocalStorage, messagesFetchLocalStorage, messagesSendData } from './state/actions/messages.js';
import {messageEndPont} from '../api/endpoints.js';
import Message from './components/Message.js'
import SendMessage from './components/SendMessage.js';

class ChatApp extends Component {

    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.sendLike = this.sendLike.bind(this);
    }

    // Update state messages on submitting new message
    sendMessage(input, messages) {
        messages = this.props.messages;
        this.props.updateMessages(messages, input);
        this.props.updateLocalStorage(messages);
    }

    // Update state messages property on submit
    sendLike(like, index) {
        const likes = this.props.messages[index];
        const messages = this.props.messages;
        messages[index].likes = like;
        this.props.updateLocalStorage(messages);
        this.setState({ likes });
    }

    // Make GET request once app is rendered
    // Call Local Storage after first Get request
    componentDidMount() {
        const messages = this.props.messages;
        if(localStorage && localStorage.getItem('messages')) {
            console.log(`componentDidMount(${'\u221A'}) ${'\u2192'} localStorage(${'\u221A'})`);
            this.props.fetchLocalStorage(messages);
        }else {
            console.log(`componentDidMount(${'\u221A'}) ${'\u2192'} fetch(${'\u221A'})`);
            this.props.fetchMessages(messageEndPont);
        }
    }

    render() {
        const messageCount = this.props.messages.length;
        return (
            <main>
                <header><h2 className="messageCount">( Messages <span>{ messageCount } )</span>...</h2></header>
                <section>
                    <Message messages={ this.props.messages } sendLike={ this.sendLike } />
                </section>
                <footer>
                    <SendMessage sendMessage={ this.sendMessage } />
                </footer>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: (endpoint) => dispatch(messagesFetchData(endpoint)),
        fetchLocalStorage: (messages) => dispatch(messagesFetchLocalStorage(messages)),
        updateLocalStorage: (messages) => dispatch(messageSaveLocalStorage(messages)),
        updateMessages: (messages, input) => dispatch(messagesSendData(messages, input)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);

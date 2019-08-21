import './styles/less/styles.less'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { messagesFetchData } from './state/actions/messages.js';
import {messages} from '../api/endpoints.js';
import MessageContainer from './components/MessageContainer.js'
import Loading from './components/Loading.js';
import SendMessage from './components/SendMessage.js';

class ChatApp extends Component {
    constructor() {
        super();
        this.sendMessage = this.sendMessage.bind(this);
        this.sendLike = this.sendLike.bind(this);
    }
    // Update state messages on submit
    sendMessage(message){
        const messages = this.props.messages;
        messages.push({
                "user": "User " + Math.floor(Math.random() * 20),
                "value": message,
                "likes": Math.floor(Math.random() * 100)
            }
        );
        this.setState({messages});
    }

    sendLike(like, index) {
        const likes = this.props.messages[index];
        this.props.messages[index].likes = like;
        this.setState({likes})
    }

    // Make GET request once app is rendered
    componentDidMount() {
        this.props.fetchMessages(messages);
    }

    render() {
        const messageCount = this.props.messages.length;
        return (
            <main>
                <header><h2 className="messageCount">( Messages <span>{messageCount} )</span>...</h2></header>
                <section>
                    {!this.props.loading ? <MessageContainer messages={this.props.messages} sendLike={this.sendLike} /> : <Loading/>}
                </section>
                <footer><SendMessage sendMessage={this.sendMessage} /></footer>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        error: state.error,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: (url) => dispatch(messagesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);

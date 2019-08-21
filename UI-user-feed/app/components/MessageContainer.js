import React, {Component } from 'react';
import Message from '../components/Message.js';

class MessageContainer extends Component {
    render() {
        const messages = this.props.messages;
        return(
            <Message messages={messages} sendLike={this.props.sendLike}/>
        );
    }
}
export default MessageContainer;

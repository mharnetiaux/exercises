import React, {Component } from 'react';
import Message from '../components/Message.js';

class MessageContainer extends Component {
    constructor(props){super(props)}
    render() {
        const messages = this.props.messages;
        return(
            <Message messages={messages} sendLike={this.props.sendLike}/>
        );
    }
}
export default MessageContainer;

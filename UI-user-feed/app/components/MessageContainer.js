import React, {Component } from 'react';
import Message from '../components/Message.js';

class MessageContainer extends Component {
    constructor(props){super(props)}
    render() {
        const messages = this.props.messages;
        const sendLike = this.props.sendLike;

        return(
            <Message messages={ messages } sendLike={ sendLike }/>
        );
    }
}
export default MessageContainer;

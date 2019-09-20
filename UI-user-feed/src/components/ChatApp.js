import '../styles/less/styles.less'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { messagesFetchData, messageSaveLocalStorage, messagesFetchLocalStorage, messagesSendData } from '../state/actions/messages';
import { messageEndPoint } from '../../api/messageEndPoint';
import Message from './Message'
import SendMessage from './SendMessage.js';

class ChatApp extends Component {
    /*constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.sendLike = this.sendLike.bind(this);
    }*/
    // Update state messages on submitting new message
    sendMessage(input, messages) {
        /*messages = this.props.messages;
        this.props.updateMessages(messages, input);
        this.props.updateLocalStorage(messages);*/
    }
    // Update state messages property on submit
    sendLike(like, index) {
       /* const likes = this.props.messages[index];
        const messages = this.props.messages;
        messages[index].likes = like;
        this.props.updateLocalStorage(messages);
        this.setState({ likes });*/
    }
    // Make GET request once src is rendered
    // Call Local Storage after first Get request
    componentDidMount() {
        /*const messages = this.props.messages;
        if(localStorage && localStorage.getItem('messages')) {
            console.log(`React componentDidMount ${'\u221A'}  ${'\u2192'}  Local storage called ${'\u221A'}`);
            this.props.fetchLocalStorage(messages);
        }else {
            console.log(`React componentDidMount ${'\u221A'}  ${'\u2192'}  Fetch called ${'\u221A'}`);
            this.props.fetchMessages(messageEndPoint);
        }*/
       // console.log(`React componentDidMount ${'\u221A'}  ${'\u2192'}  Fetch called ${'\u221A'}`);

        //this.props.fetchMessages(messageEndPoint);
    }
    render() {
        /*const { messages } = this.props;
        const messageCount = messages.length;*/
        return (
            <main>
                {/*<header><h2 className="messageCount">( Messages <span>{ messageCount } )</span>...</h2></header>
                <section>
                    <Message messages={ messages } sendLike={ this.sendLike } />
                </section>
                <footer>
                    <SendMessage sendMessage={ this.sendMessage } />
                </footer>*/}
                {/*<Message messages={ messages } sendLike={ this.sendLike } />*/}
                Hello???
            </main>
        );
    }
}

ChatApp.propTypes = {
    //messages: PropTypes.array.isRequired,

    //fetchMessages: PropTypes.func.isRequired,

    /*fetchLocalStorage:  PropTypes.func.isRequired,
    updateLocalStorage: PropTypes.func.isRequired,
    updateMessages: PropTypes.func.isRequired*/
};

/*const mapStateToProps = (state) => {
    const { messages } = state;
    return { messages };
};*/
/*
const mapDispatchToProps = (dispatch) => {
    return {
        //fetchMessages: (endpoint) => dispatch(messagesFetchData(endpoint)),

        /!*fetchLocalStorage: (messages) => dispatch(messagesFetchLocalStorage(messages)),
        updateLocalStorage: (messages) => dispatch(messageSaveLocalStorage(messages)),
        updateMessages: (messages, input) => dispatch(messagesSendData(messages, input))*!/
    };
};*/

export default ChatApp;
//export default connect()(ChatApp);

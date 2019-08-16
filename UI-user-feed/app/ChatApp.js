import './styles/less/styles.less'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {messages} from '../api/endpoints.js';
import MessageContainer from './components/MessageContainer.js'
import Loading from './components/Loading.js';
import SendMessage from './components/SendMessage.js';

class ChatApp extends Component {
    constructor() {
        super();
        // Redux move
        this.state = {
            messages: []
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.sendLike = this.sendLike.bind(this);
    }
    // Update state messages on submit
    sendMessage(message){
        const messages = this.state.messages;
        messages.push({
                "user": "User " + Math.floor(Math.random() * 20),
                "value": message,
                "likes": Math.floor(Math.random() * 100)
            }
        );
        this.setState({messages});
    }
    // Update 'likes' prop on click
    // Work in progress...
    sendLike(like) {
        console.log(like);
    }
    // Method to make GET request
    getMessages(url) {
        const messages = this.state.messages;
        // Fetch API - AJAX
        // Add method, headers?
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                this.setState({ loading: false });
                return response;
            })
            .then((response) => response.json())
            .then((obj) => {
                // Orchestrate data to put in state messages
                Object.keys(obj.feed).map(item => {
                    messages.push(obj.feed[item]);
                });
                // populate state messages
                this.setState({messages})
            })
            .catch(() => console.log("Error"));
    }
    // Make GET request once app is rendered
    componentDidMount() {
        this.getMessages(messages);
    }

    render() {
        const messageCount = this.state.messages.length;
        return (
            <main>
                <header><h2 className="messageCount">( Messages <span>{messageCount} )</span>...</h2></header>
                <section>
                    {this.state.messages.length ? <MessageContainer messages={this.state.messages} sendLike={this.sendLike} /> : <Loading/>}
                </section>
                <footer><SendMessage sendMessage={this.sendMessage} /></footer>
            </main>
        );
    }
}
ReactDOM.render(<ChatApp />, document.getElementById('root'));

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
        this.state = {
            messages: [],
            loading: false,
            error: false
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
    sendLike(like, index) {
        const likes = this.state.messages[index];
        this.state.messages[index].likes = like;
        this.setState({likes})
    }
    // Method to make GET request
    getMessages(url) {
        this.setState({ loading: true });
        const messages = this.state.messages;
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
            .catch(() => this.setState({ errored: true }));
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
                    {!this.state.loading ? <MessageContainer messages={this.state.messages} sendLike={this.sendLike} /> : <Loading/>}
                </section>
                <footer><SendMessage sendMessage={this.sendMessage} /></footer>
            </main>
        );
    }
}
ReactDOM.render(<ChatApp />, document.getElementById('root'));

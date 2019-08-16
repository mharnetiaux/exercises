import React, {Component } from 'react';

class SendMessage extends Component {
    constructor(){
        super();
        this.state = {
            input: ""
        };
    }
    // Collect Input
    onChange(e) {
        this.setState({input: e.target.value});
    }
    // Pass state through callback
    onSubmit(e) {
        e.preventDefault();
        this.setState({input: ""});
        this.props.sendMessage(this.state.input);
    }
    render() {
        return(
            <form onSubmit={e => this.onSubmit(e)}>
                <input
                    onChange={e => this.onChange(e)}
                    value={this.state.input}
                    type="text"
                    placeholder="Enter message"
                    autoFocus="true"
                />
                <button>Send</button>
            </form>
        );
    }
}
export default SendMessage;

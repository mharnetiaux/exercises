import React, {Component } from 'react';

class SendMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        this.setState({input: event.target.value});
    }
    onSubmit(event) {
        event.preventDefault();
        this.setState({ input: ""} );
        this.props.sendMessage(this.state.input);
    }
    render() {
        return(
            <form onSubmit={ event => this.onSubmit(event) }>
                <input
                    onChange={ event => this.onChange(event) }
                    value={ this.state.input }
                    type="text"
                    placeholder="Enter message"
                    autoFocus={ true }
                />
                <button>Send</button>
            </form>
        );
    }
}
export default SendMessage;

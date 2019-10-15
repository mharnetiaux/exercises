import React, { Component } from 'react';

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: this.props.index,
            likes: this.props.likes
        };
        this.incrementLikes = this.incrementLikes.bind(this);
    }
    incrementLikes() {
        this.setState({ likes: this.state.likes += 1 });
        this.props.sendLike(this.state.likes, this.state.index);
    }
    render() {
        return(
            <button onClick={ this.incrementLikes }>{ this.state.likes }</button>
        );
    }
}
export default LikeButton;

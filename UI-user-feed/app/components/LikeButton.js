import React, {Component } from 'react';

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.likeCount
        };
        this.handleLike = this.handleLike.bind(this);
    }
    // Increment like count
    handleLike(){
        this.setState({likes: this.state.likes + 1})
    }
    render() {
        return(
            <button onClick={this.handleLike}>{this.state.likes}</button>
        );
    }
}
export default LikeButton;


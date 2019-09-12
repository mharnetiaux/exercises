import React from 'react';
import LikeButton from '../components/LikeButton.js';

const Message = (props) => {
    const chatContent = Object.keys(props.messages).map((item) => props.messages[item]);
    return(
        <span>
            {chatContent.map((content, id) =>
                <ul key={id} className="message">
                    <li className="user">{ content.user }</li>
                    <li className="message">{ content.value }</li>
                    <li><LikeButton likeCount={ content.likes } sendLike={ props.sendLike } content={ content.user } index={ id }/></li>
                </ul>
            )}
        </span>
    );
};
export default Message;

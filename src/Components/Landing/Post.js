import React from 'react';
import './Post.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Post({image}) {
    return (
        <div className="post">
            
            <div className="post__top">
                <img src={image} alt="post-pic"/>
            </div>
           
            <div className="post__bottom">
                <FavoriteBorderIcon />
            </div>
        </div>
    )
}

export default Post

import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';

function Post({avatarSrc,name, image}) {
    return (
        <div className="post">
            
            <div className="post__top">
                <Avatar 
                    src={avatarSrc}
                    className="post__avatar"
                    />
                <p>{name}</p>
            </div>

            <div className="post__middle">
                <img src={image} alt="post-pic"/>
            </div>
           
            <div className="post__bottom">
                
                <div className="post__option">
                    <FavoriteBorderIcon />
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                </div>
                <div className="post__option">
                    <NearMeIcon />
                </div>
                
            </div>
        </div>
    )
}

export default Post

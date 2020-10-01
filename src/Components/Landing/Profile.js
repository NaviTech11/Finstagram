import React from 'react';
import './Profile.css';
import { Avatar } from '@material-ui/core';

function Profile({avatarSrc, name, username, followers, following,posts}) {
    return (
        <div className="profile">
            
            <Avatar 
                className="profile__avatar"
                src={avatarSrc}    
            />
    
            <div className="profile__username">
                <h2>{name}</h2>
                <p>{username}</p>
            </div>

            <div className="profile__stats">
                <div className="profile__info">
                    <h5>{followers}</h5>
                    <p>Followers</p>
                </div>
                <div className="profile__info">
                    <h5>{following}</h5>
                    <p>Following</p>
                </div>
                <div className="profile__info">
                    <h5>{posts}</h5>
                    <p>Posts</p>
                </div>
            </div>
        </div>
    )
}

export default Profile

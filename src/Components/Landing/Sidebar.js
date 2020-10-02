import React, { useState } from 'react';
import './Sidebar.css';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStateValue } from '../../StateProvider';
import firebase from "firebase";
import db from "../../firebase";


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        //Database Code
        db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            avatarSrc: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        //reset Input
        setImageUrl("")
    }

    return (
        <div className="sidebar">
            {/* Header/Title */}
            <div className="sidebar__title">
                <InstagramIcon className="finsta__icon"/>
                <h1>Finstagram</h1>
                
            </div>
            
            {/* Profile */}
            <div className="sidebar__profile">
               <Profile 
                   avatarSrc={user.photoURL}
                   name={user.displayName}
                   username={`@${user.displayName}`}
                   followers="1.46K"
                   following="533"
                   posts="257"
               />
            </div>
            
            {/* Navbar */}
            <div className="sidebar__navbar">
                <div className="navbar__option--active">
                    <Link to="/landing" className="navbar__link">
                        <HomeIcon fontSize="large"/>
                    </Link>
                    <p>Home</p>
                </div>
                <div className="navbar__option">
                    <Link to="/messenger" className="navbar__link">
                        <SendIcon fontSize="large"/>
                    </Link>
                    <p>Messages</p>
                </div>
                <div className="navbar__option">
                    <ExploreIcon fontSize="large"/>
                    <p>Explore</p>
                </div>
                <div className="navbar__option">
                    <FavoriteBorderIcon fontSize="large"/>
                    <p>Favorite</p>
                </div>
            </div>
            
            {/* Button */}
            <form action="">
                <div className="image__input">
                    <input 
                        required
                        value={imageUrl}
                        onChange={event => setImageUrl(event.target.value)}
                        placeholder={`Image Url`}
                    />
                </div>
                <div className="sidebar__btn">
                    <Button onClick={handleSubmit} type="submit">
                        +
                    </Button> 
                </div>

            </form>
            
        </div>
    )
}

export default Sidebar

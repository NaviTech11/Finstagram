import React from 'react';
import './Sidebar.css';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


function Sidebar() {
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
                   avatarSrc="https://lh3.googleusercontent.com/-KAb_q-5rvfw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmm4RXi5191mqRF0j3dqNRuHxo_dA/s48-c/photo.jpg"
                   name="Ivan Hernandez"
                   username="@ivan.react"
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
            <div className="sidebar__btn">
                <Button>
                    +
                </Button> 
            </div>
            
        </div>
    )
}

export default Sidebar

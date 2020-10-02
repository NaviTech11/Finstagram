import React, { useState, useEffect } from 'react';
import './MesSidebar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Card, CardContent, Avatar } from '@material-ui/core';
import db from '../../firebase';
import firebase from 'firebase';


function MesSidebar() {

    /*const [conversations, setConversations] = useState([]);

    useEffect(() => {
        db.collection('messages').onSnapshot(snapshot => {
          setConversations(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
        });
      }, [] )

    const userConv = conversations.filter(conv => conv.id === "kyIbYwakEHuxzBOIGNuc" || "oiqjCuj5j7Vc5zD0mQ8F").map()*/
    
    

    return (
        <div className="sidebar">
            <div className="sidebar__navbar">
                <div className="navbar__option">
                    <Link to="/landing" className="navbar__link">
                        <HomeIcon fontSize="large"/>
                    </Link>
                </div>
                <div className="navbar__option--active">
                    <Link to="/messenger" className="navbar__link">
                        <SendIcon fontSize="large"/>
                    </Link>
                </div>
                <div className="navbar__option">
                    <ExploreIcon fontSize="large"/>
                </div>
                <div className="navbar__option">
                    <FavoriteBorderIcon fontSize="large"/>
                </div>
            </div>
            <div className="sb__conversations">

            </div>
        </div>
    )
}

export default MesSidebar

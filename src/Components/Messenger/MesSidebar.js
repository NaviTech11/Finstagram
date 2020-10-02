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
        <div className="mesSidebar">
            <div className="mesSidebar__navbar">
                <div className="mesNavbar__option">
                    <Link to="/landing" className="mesNavbar__link">
                        <HomeIcon fontSize="large"/>
                    </Link>
                </div>
                <div className="mesNavbar__option--active">
                    <Link to="/messenger" className="mesNavbar__link">
                        <SendIcon fontSize="large"/>
                    </Link>
                </div>
                <div className="mesNavbar__option">
                    <ExploreIcon fontSize="large"/>
                </div>
                <div className="mesNavbar__option">
                    <FavoriteBorderIcon fontSize="large"/>
                </div>
            </div>
            <div className="sb__conversations">

            </div>
        </div>
    )
}

export default MesSidebar

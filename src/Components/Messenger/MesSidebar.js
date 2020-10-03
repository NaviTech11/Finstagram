import React, { Component } from 'react';
import './MesSidebar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from '@material-ui/core';
import { CONVERSATIONS } from './conversations';


function RenderConversation({conversation}) {
    return (
        <div>
            <div className="row1">
                <div className="convo__col1">
                    <Avatar className="convo__avatar" src={conversation.image} />
                </div>
                <div className="convo__col2">
                    <h2>{conversation.name}</h2>
                    <p>{conversation.display}</p>
                </div>
            </div>
        </div>
    );
}

class MesSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversations: CONVERSATIONS
        };
    }
    
    render() {

        const convo = this.state.conversations.map(conversation => {
            return (
                <RenderConversation conversation={conversation} />
            );
        })

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
                    {convo}
                </div>
            </div>
        )
    }
}

export default MesSidebar

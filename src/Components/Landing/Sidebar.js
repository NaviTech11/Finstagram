import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="title">
                <img src="https://picsvg.com/svg/CxST2hDEVM.svg" alt="finsta-logo"/>
                <h1>Finstagram</h1>
            </div>
            
            {/* Profile */}
            <div className="profile">
                <Avatar 
                    className="profile__avatar"
                    src="https://lh3.googleusercontent.com/-KAb_q-5rvfw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmm4RXi5191mqRF0j3dqNRuHxo_dA/s48-c/photo.jpg"
                />
            </div>
            
            {/* Navbar */}
            <div className="navbar">

            </div>
            
            {/* Button */}
        </div>
    )
}

export default Sidebar

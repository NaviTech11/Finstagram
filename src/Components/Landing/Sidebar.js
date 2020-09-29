import React from 'react';
import './Sidebar.css';
import Profile from './Profile';
import InstagramIcon from '@material-ui/icons/Instagram';

function Sidebar() {
    return (
        <div className="sidebar">
            
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

            </div>
            
            {/* Button */}
        </div>
    )
}

export default Sidebar

import React from 'react';
import "./Landing.css";
import Sidebar from './Sidebar';
import LandingBody from './LandingBody'

function Landing() {
    return (
        <div className="landing">
            
            <div className="landing__sidebar">
                <Sidebar />
            </div>

            <div className="landing__body">
                <LandingBody />
                
            </div>
            
        </div>
    )
}

export default Landing

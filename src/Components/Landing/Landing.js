import React from 'react';
import "./Landing.css";
import Sidebar from './Sidebar';

function Landing() {
    return (
        <div className="landing">
            
            <div className="landing__sidebar">
                <Sidebar />
            </div>

            <div className="landing__body">
                
                {/* Landing Body */}

            </div>
            
        </div>
    )
}

export default Landing

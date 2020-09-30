import React from 'react';
import './LandingBody.css';
import Post from './Post';
import SearchIcon from '@material-ui/icons/Search';


function LandingBody() {
    return (
        <div className="landing__body">
            
            <div className="body__search">
                <SearchIcon />
                <input placeHolder="Search Finsta" type="text"/>
                
            </div>
            
            <div className="body__post">
                <Post 
                    image="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                />
                <Post 
                    image="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                />
            </div>
        </div>
    )
}

export default LandingBody

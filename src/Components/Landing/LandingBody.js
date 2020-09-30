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
                    avatarSrc="https://lh3.googleusercontent.com/-20KRdi98tlg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnQ15iroprPcheP31422eXD80zcVA/s48-c/photo.jpg"
                    name="John Ashburn"
                    image="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                />
                <Post 
                    avatarSrc="https://lh3.googleusercontent.com/-KAb_q-5rvfw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmm4RXi5191mqRF0j3dqNRuHxo_dA/s48-c/photo.jpg"
                    name="Ivan Hernandez"
                    image="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                />
            </div>
        </div>
    )
}

export default LandingBody

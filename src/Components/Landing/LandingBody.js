import React, { useState, useEffect } from 'react';
import './LandingBody.css';
import Post from './Post';
import SearchIcon from '@material-ui/icons/Search';
import StoryReel from './StoryReel';
import db from "../../firebase";
import FlipMove from 'react-flip-move';


function LandingBody() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts')
          .orderBy('timestamp', 'desc')
          .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, [])

    return (
        <div className="landing__body">
            
            <div className="body__post">
            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        avatarSrc={post.data.avatarSrc}
                        name={post.data.username}
                        image={post.data.image}
                        // timestamp={post.data.timestamp}
                    />
                ))}   
            </FlipMove>

            </div>

            <div className="body__right">
                <div className="body__search">
                    <SearchIcon />
                    <input placeHolder="Search Finsta" type="text"/>
                    
                </div>

                <div className="body__storyReel">
                    <StoryReel />
                </div>
            </div>
        </div>
    )
}

export default LandingBody

import React from 'react';
import './StoryReel.css';
import { Avatar } from '@material-ui/core';

function StoryReel() {
    return (
        <div className="storyReel">
            <p>Stories</p>
            <Avatar 
                className="storyReel__avatar"
                src="https://images.unsplash.com/profile-1517774795551-3ea813a72bc2?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"    
            />
            <Avatar 
                className="storyReel__avatar"
                src="https://images.unsplash.com/profile-fb-1463158455-a8bc962daa0f.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            />
            <Avatar 
                className="storyReel__avatar"
                src="https://images.unsplash.com/profile-1512142259313-50363a2266b3?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            />
            <Avatar 
                className="storyReel__avatar"
                src="https://images.unsplash.com/profile-1565517334625-a2278ac29796?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            />
            <Avatar 
                className="storyReel__avatar"
                src="https://images.unsplash.com/profile-1531298357193-487f8092716c?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            />
            <Avatar 
                className="storyReel__avatar"
                src="https://images.unsplash.com/profile-1594909198305-018f27db7168image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            />
            <Avatar 
                className="storyReel__avatar"
                src="https://images.unsplash.com/profile-1508010580564-62f853ccfa12?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            />
            <Avatar 
                className="storyReel__avatar"
                src="https://images.unsplash.com/profile-1541467066241-0b337dc7a013?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            />
        </div>
    )
}

export default StoryReel

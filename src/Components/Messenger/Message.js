import React, { forwardRef } from 'react';
import { Card, CardContent, Typography, Avatar } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message, username, photoURL}, ref) => {
    const isUser = username === message.username;

    return (
        <React.Fragment>
            <div ref={ref} className={`message ${isUser && 'message__user'}`}>
                <div className={isUser ? "message__sent" : "message__received"}>
                    <div className={isUser ? "row1" : "row2"}>
                        <Avatar className="message__avatar" src={message.photoURL} />
                    </div>
                    <div>
                        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                            <CardContent>
                                <Typography color="white" variant="h5" component="h2">
                                    {message.message} 
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})

export default Message
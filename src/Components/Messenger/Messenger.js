import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './Messenger.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton, Grid } from '@material-ui/core';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { SignIn, SignOut } from './Auth';
import { ChatRoom } from './Room';

const auth = firebase.auth();

function Messenger() {

    const [user] = useAuthState(auth);
        
    return (
        <Grid className="messengerField" xs={6}>

        <h1>Messenger App</h1>
        <SignOut />
        <section>
            {user ? <ChatRoom /> : <SignIn />}
        </section>

        </Grid>
    );
}

export default Messenger;
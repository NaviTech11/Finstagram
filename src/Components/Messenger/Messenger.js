import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './Messenger.css';
import Message from './Message';
import db from '../../firebase';
import firebase from 'firebase';
import { Grid } from '@material-ui/core';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn, SignOut } from './Auth';
import { ChatRoom } from './Room';
import MesSidebar from './MesSidebar';

const auth = firebase.auth();

function Messenger() {

    const [user] = useAuthState(auth);
        
    return (
        <div>
            <Grid container>
                <Grid item xs={3}>
                    <MesSidebar />
                </Grid>
                <Grid item xs={9}>
                    <div className="messengerField">

                    <h1>Messenger App</h1>
                    <SignOut />
                    <section>
                        {user ? <ChatRoom /> : <SignIn />}
                    </section>

                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Messenger;
import React from 'react';
import './Messenger.css';
import firebase from 'firebase';
import { Grid } from '@material-ui/core';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ChatRoom } from './Room';
import MesSidebar from './MesSidebar';
import Login from '../Login';

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
                    <div className="messengerField2">
                    <section>
                        {user ? <ChatRoom /> : <Login />}
                    </section>

                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Messenger;
import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './Room.css';
import Message from './Message';
import db from '../../firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton, Grid } from '@material-ui/core';
import 'firebase/firestore';
import 'firebase/auth';

const auth = firebase.auth();

function ChatRoom() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )


  const { uid, photoURL, displayName } = auth.currentUser;
  
  useEffect(() => {
      setUsername(uid)
  }, [] )

  const sendMessage = (event) => {
      
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName
    })
    setInput('');
  }

  return (
    <Grid className="messengerField">
      
      <Grid className="messengerForm" xs={8}>
        <form>
            <FormControl className="formControl">
            <Input className="messengerInput" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
            <IconButton className="iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
                <SendIcon />
            </IconButton>
            </FormControl>
        </form>
      </Grid>


      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} photoURL={photoURL} message={message} />
          ))
        }
      </FlipMove>

    </Grid>
  );
}

export { ChatRoom };
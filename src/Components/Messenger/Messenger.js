import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './Messenger.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton, Grid } from '@material-ui/core';

function Messenger() {
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

  useEffect(() => {
    //run code here
    //if its black inside [], this code runs ONCE when the app component loads
    setUsername(prompt('Please enter your name'))
  }, [] ) //condition

  const sendMessage = (event) => {
    // all the logic to send a message goes here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <Grid className="messengerField" xs={6}>

      <h1>Messenger App</h1>
      <h2>Welcome {username}</h2>

      
      <Grid className="messengerForm" xs={6}>
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
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </Grid>
  );
}

export default Messenger;
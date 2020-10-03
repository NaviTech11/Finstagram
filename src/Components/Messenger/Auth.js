import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './Messenger.css';
import Message from './Message';
import db from '../../firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const auth = firebase.auth();

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export { SignIn, SignOut };
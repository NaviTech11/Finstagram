import React from 'react';
import './Messenger.css';
import 'firebase/firestore';
import {auth} from '../../firebase'


function SignIn() {
  return (
    <>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export { SignIn, SignOut };
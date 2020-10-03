import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Login() {
    const [user, dispatch] = useStateValue();
    const signIn = () => {
        //Sign In
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user)
        })
        .catch(error => alert(error.message));

    }
    return (
        <div className='login'>
            <div className="login__container">
                <img 
                    src="./finsta-logo.jpg"
                    alt="finsta-logo"
                />
                <h1>Finstagram</h1>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            </div>
    </div>
    )
}

export default Login

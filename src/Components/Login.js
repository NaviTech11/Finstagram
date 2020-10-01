import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

function Login() {

    const signIn = () => {
        //Sign In

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

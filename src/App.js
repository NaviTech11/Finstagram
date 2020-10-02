import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import Messenger from './Components/Messenger/Messenger';
import Login from './Components/Login';


function App() {
  const user = "ivane";

  return (

    <Router>
      <div className="app">
          {!user ? (
            <Login />
          ) : (

            <Switch>
                
                <Route path="/landing">
                  <Landing />
                </Route>
              
                <Route path="/messenger">
                  <Messenger />
                </Route>

            </Switch>
          )}
      </div>
    </Router>
  );
}

export default App;

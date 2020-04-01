import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={SignInForm} />
              <Route path="/sign-in" component={SignInForm} />
              <Route path="/sign-up" component={SignUpForm} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

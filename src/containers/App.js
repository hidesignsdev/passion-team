import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

class App extends Component {
  submit = values => {
    console.log(values)
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/'>
                  <SignInForm onSubmit={this.submit}/>
                </Route>
                <Route path="/sign-in">
                  <SignInForm onSubmit={this.submit}/>
                </Route>
                <Route path="/sign-up">
                  <SignUpForm onSubmit={this.submit}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

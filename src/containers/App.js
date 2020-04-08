import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory as history } from "history";
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import UserInfoForm from '../components/UserInfoForm';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="auth-wrapper">
          <Switch>
            <Route exact path='/'>
              <SignInForm history={history}/>
            </Route>
            <Route path="/sign-in">
              <SignInForm history={history}/>
            </Route>
            <Route path="/sign-up">
              <SignUpForm history={history}/>
            </Route>
            <Route path="/user-info">
              <UserInfoForm history={history}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

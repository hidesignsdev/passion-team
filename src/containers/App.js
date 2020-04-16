import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory as history } from "history";
import { connect } from 'react-redux';

import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import UserInfoForm from '../components/UserInfoForm';

class App extends Component {
  render() {
    const currentRoute = []
    if(this.props.auth.isLogin || true){
      currentRoute.push([
        <Route path="/user-info" component={UserInfoForm} />,
        <Redirect to="/user-info"/>
      ])
    }
    else{
      currentRoute.push([
        <Route exact path="/" component={SignInForm} />,
        <Route path="/sign-in" component={SignInForm} />,
        <Route path="/sign-up" component={SignUpForm} />,
        <Redirect to="/"/>
      ])
    }
    return (
      <Router history={history}>
        <div className="auth-wrapper">
          <Switch>
            {
              currentRoute
            }
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(App);

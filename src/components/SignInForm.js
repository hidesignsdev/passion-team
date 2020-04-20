import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import { signIn } from '../actions'
import { FormGroup } from './FormGroup';

class SignInForm extends Component {
    submit = values => {
        this.props.signIn(values)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.submit)} className="auth-inner">
                <img src="#" alt="empty"/>  
                <div className="form-container">
                    <Field
                        name="username"
                        component={FormGroup}
                        label="Email"
                        type="email"
                        placeholder="parkjinyoung@gmail.com"
                    />
                    <Field
                        name="password"
                        component={FormGroup}
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        forgotpassword
                    />
                    <button type="submit" className="btn" disabled={this.props.auth.isLoading}>{this.props.auth.isLoading ? "Loading..." : "Sign In"}</button>
                </div>
                <p className="bottom">
                    Don't have account? <Link to={"/sign-up"}>Sign Up</Link>
                </p>
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'signin'
})(SignInForm)

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (values) => dispatch(signIn(values))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));
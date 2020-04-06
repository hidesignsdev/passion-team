import React, { Component } from 'react';
import { FormGroup, validate } from './FormGroup';
import { Link } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <img src="#" alt="empty"/>  
                <div>
                    <Field
                        name="email"
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
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
                <p className="bottom">
                    Don't have account? <Link to={"/sign-up"}>Sign Up</Link>
                </p>
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'signin',
    validate
})(SignInForm)

export default SignInForm;
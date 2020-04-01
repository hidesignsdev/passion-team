import React from 'react';
import FormGroup from './FormGroup';
import { Link } from "react-router-dom";
import { reduxForm } from 'redux-form';
let SignInForm = () => {
    return (
        <form>
            <img src="#" alt="empty"/>
            <div>
                <FormGroup
                    label="Email"
                    type="email"
                    placeholder="parkjinyoung@gmail.com"
                />
                <FormGroup
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
};

SignInForm = reduxForm({
    form: 'sign-in'
})(SignInForm)

export default SignInForm;
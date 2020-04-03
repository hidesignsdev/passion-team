import React, { Component } from 'react';
import FormGroup from './FormGroup';
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form';

import { faEye , faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class SignUpForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: "password",
            icon: faEye
        }
    }

    handleOnClick = () => {
        this.setState({
            type: this.state.type === "text"? "password" : "text",
            icon: this.state.icon === faEye ? faEyeSlash : faEye 
        })
    }

    render() {
        const {handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <img src="#" alt="empty"/>
                <div>
                    <Field
                        name="firstname"
                        component={FormGroup}
                        label="First name"
                        type="text"
                        placeholder="Jin-young"
                    />
                    <Field
                        name="lastname"
                        component={FormGroup}
                        label="Last name"
                        type="text"
                        placeholder="Park"
                    />
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
                        type={this.state.type}
                        placeholder="Enter your password"
                        handleOnClick={this.handleOnClick}
                        icon={this.state.icon}
                    />
                    <Field
                        name="repassword"
                        component={FormGroup}
                        label="Confirm your password"
                        type={this.state.type}
                        placeholder="Re-enter your password"

                    />
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
                <p className="bottom">
                    Already have account? <Link to={"/sign-in"}>Sign In</Link>
                </p>
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: 'signup'
})(SignUpForm)

export default SignUpForm;
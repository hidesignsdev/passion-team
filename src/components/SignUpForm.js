import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { reduxForm, Field } from 'redux-form';

import { FormGroup, validate } from './FormGroup';
import { signUp } from '../actions'


class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "password",
            icon: faEye,
            isLoading: false
        }
    }

    handleOnClick = () => {
        this.setState({
            type: this.state.type === "text" ? "password" : "text",
            icon: this.state.icon === faEye ? faEyeSlash : faEye
        })
    }

    submit = values => {
        this.setState({
            isLoading: true
        })
        this.props.signUp(values)
        this.setState({
            isLoading: false
        })
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.submit)} className="auth-inner">
                <img src="#" alt="empty" />
                <div className="form-container">
                    <Field
                        name="firstName"
                        component={FormGroup}
                        label="First name"
                        type="text"
                        placeholder="Jin-young"
                    />
                    <Field
                        name="lastName"
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
                    <button type="submit" className="btn" disabled={this.props.auth.isLoading}>{this.props.auth.isLoading ? "Loading..." : "Sign Up"}</button>
                    {this.props.auth.error ? <span className="validate-error">{this.props.auth.errorMessage}</span> : null}
                </div>
                <p className="bottom">
                    Already have account? <Link to={"/sign-in"}>Sign In</Link>
                </p>
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: 'signup',
    validate
})(SignUpForm)

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (values) => dispatch(signUp(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm));
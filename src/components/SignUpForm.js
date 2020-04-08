import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { reduxForm, Field } from 'redux-form';
import Swal from 'sweetalert2'

import { FormGroup, validate } from './FormGroup';
import { signUp } from '../actions'


class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "password",
            icon: faEye
        }
    }

    handleOnClick = () => {
        this.setState({
            type: this.state.type === "text" ? "password" : "text",
            icon: this.state.icon === faEye ? faEyeSlash : faEye
        })
    }

    submit = values => {
        this.props.signUp(values)
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Sign-up complete.',
            onClose: () => this.props.history.push('/')
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
                    <button type="submit" className="btn">Sign Up</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (values) => dispatch(signUp(values))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(SignUpForm));
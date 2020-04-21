import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field } from 'formik';

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
        this.props.signUp(values)
    }

    render() {
        return (
            <Formik
                initialValues={{
                }}
                validate={(values) => {
                    let error = {}
                    if (!values.username) error.username = 'REQUIRED';

                    return error
                }}
                onSubmit={this.submit}
            >
                {
                    formProps => {
                        console.log(formProps)
                        return (
                            <Form className="auth-inner">
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
                                    <button
                                        type="submit"
                                        className="btn"
                                        disabled={formProps.isSubmitting}
                                    >
                                        {formProps.isSubmitting ? "Loading..." : "Sign Up"}
                                    </button>
                                </div>
                                <p className="bottom">
                                    Already have account? <Link to={"/sign-in"}>Sign In</Link>
                                </p>
                            </Form>
                        )
                    }
                }
            </Formik>
        )
    }
}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Link, withRouter } from "react-router-dom";
import { signIn } from '../actions'
import { FormGroup } from './FormGroup';

class SignInForm extends Component {
    submit = values => {
        console.log(values)
    }

    render() {
        return (
            <Formik
                initialValues={{
                    username: '',
                    password: ''
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
                                    <button
                                        type="submit"
                                        className="btn"
                                        disabled={formProps.isSubmitting}
                                    >
                                        {formProps.isSubmitting ? "Loading..." : "Sign In"}
                                    </button>
                                </div>
                                <p className="bottom">
                                    Don't have account? <Link to={"/sign-up"}>Sign Up</Link>
                                </p>
                            </Form>
                        )
                    }
                }
            </Formik>
        );
    }
}

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
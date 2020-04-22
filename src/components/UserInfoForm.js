import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

import { FormGroup } from './FormGroup';
import ImageUpload from './ImageUpload';
import {updateProfile} from '../actions/index'

class UserInfoForm extends Component {
    submit = (values, {props = this.props, setSubmitting }) => {
        props.updateProfile(values)
        setSubmitting(false)
    }
    render() {
        if(this.props.auth.isComplete) this.props.history.push('/account')
        return (
            <Formik
                initialValues={{
                    file: null,
                    gender: '',
                    dateOfBirth: ''
                }}
                onSubmit={this.submit}
            >
                {
                    formProps => {
                        return (
                            <Form className="auth-inner">
                                <div className="header">
                                    <h2>Personal Information</h2>
                                    <Field name="file" component={ImageUpload}/>
                                </div>
                                <div className="form-container">
                                    <div className="form-group">
                                        <div className="form-label">
                                            <label>Gender</label>
                                        </div>
                                        <Field name="gender" component="select" className="select-form">
                                            <option value="">Select your gender...</option>
                                            <option value="男性">男性</option>
                                            <option value="女性">女性</option>
                                            <option value="その他">その他</option>
                                        </Field>
                                    </div>

                                    <Field
                                        name="dateOfBirth"
                                        component={FormGroup}
                                        label="Birthday"
                                        type="date"
                                    />
                                </div>
                                <button type="submit" className="btn" disabled={formProps.isSubmitting}>{formProps.isSubmitting ? "Loading..." : "Next"}</button>
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
        updateProfile: (values) => dispatch(updateProfile(values))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserInfoForm));
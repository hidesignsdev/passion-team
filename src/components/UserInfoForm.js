import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as Yup from 'yup';

import { FormGroup } from './FormGroup';
import ImageUpload from './ImageUpload';
import {updateProfile} from '../actions/index'

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];
const UserInfoSchema = Yup.object().shape({
    file: Yup.mixed()
        .required('A file is required')
        .test(
            "fileSize",
            "File too large",
            value => value && value.size <= FILE_SIZE
          )
          .test(
            "fileFormat",
            "Unsupported Format",
            value => value && SUPPORTED_FORMATS.includes(value.type)
          ),
    gender: Yup.string().required('Required'),
    dateOfBirth: Yup.date().required('Required')
})

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
                validationSchema={UserInfoSchema}
                onSubmit={this.submit}
            >
                {
                    formProps => {
                        return (
                            <Form className="auth-inner">
                                <div className="header">
                                    <h2>Personal Information</h2>
                                    <Field name="file" component={ImageUpload}/>
                                    <span className="validate-error">
                                        <ErrorMessage name="file"/>
                                    </span>
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
                                        <span className="validate-error">
                                            <ErrorMessage name="gender"/>
                                        </span>         
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
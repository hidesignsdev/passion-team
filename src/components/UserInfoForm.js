import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'
import { FormGroup } from './FormGroup';

class UserInfoForm extends Component {
    submit = values => {
        
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.submit)} className="auth-inner">
                <div>
                    <h2>Personal Information</h2>
                    <img src="#" alt="empty"/>  
                </div>
                <div className="form-container">
                    <Field
                        name="gender"
                        component={FormGroup}
                        label="Gender"
                        type="select"
                    />
                    <Field
                        name="birthday"
                        component={FormGroup}
                        label="Birthday"
                        type="date"
                    />
                </div>
                <button type="submit" className="btn">Next</button>
            </form>
        );
    }
}

UserInfoForm = reduxForm({
    form: 'userinfo',
})(UserInfoForm)

export default UserInfoForm;
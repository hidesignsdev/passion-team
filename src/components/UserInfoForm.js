import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'
import { FormGroup } from './FormGroup';
import ImageUpload from './ImageUpload'

class UserInfoForm extends Component {
    submit = values => {
        console.log(values.file)
        console.log('result',values)
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.submit)} className="auth-inner">
                <div>
                    <h2>Personal Information</h2>
                    <Field name="avatarId" component={ImageUpload}/>
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
                        name="dateOfBirthoptional"
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
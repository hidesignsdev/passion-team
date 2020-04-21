import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorMessage } from 'formik';
 

export const validate = values => {
    const errors = {}
    if(!values.firstName){
        errors.firstName = '*Required'
    }

    if(!values.lastName){
        errors.lastName = '*Required'
    }

    if(!values.email){
        errors.email = '*Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = '*Invalid email address.'
    }

    if(!values.password){
        errors.password = '*Required'
    }
    else if(!/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)){
        errors.password = '*Must be at least 8 characters and at least one letter and one number'
    }

    if(values.repassword !== values.password){
        errors.repassword = '*Password don\'t match'
    }
    return errors
}

export const FormGroup = ({field, form: {touched, errors}, ...props}) => {
    return (
        <div className="form-group">
            <div className="form-label">
                <label htmlFor={field.name}>{props.label}</label>

                { props.forgotpassword ? (
                    <span className="forgot-password"><a href="/">Forgot password?</a></span>
                ) : null }
                
            </div>

            <input {...field} 
                id={field.name} 
                type={props.type} 
                className="form-control" 
                placeholder={props.placeholder}
            />
            { props.icon ? 
                <FontAwesomeIcon icon={props.icon} onClick={props.handleOnClick} className="showNhide"/>
            : null }

            <span className="validate-error">
                <ErrorMessage name={field.name} className="validate-error"/>
            </span>       

            {/* { touched[field.name] && (errors[field.name] && <span className="validate-error">{errors[field.name]}</span>)} */}
        </div>
    );
};
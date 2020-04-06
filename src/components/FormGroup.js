import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

export const validate = values => {
    const errors = {}
    if(!values.firstname){
        errors.firstname = '* Required'
    }

    if(!values.lastname){
        errors.lastname = '* Required'
    }

    if(!values.email){
        errors.email = '* Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = '* Invalid email address'
    }

    if(!values.password){
        errors.password = '* Required'
    }
    else if(values.password.length < 8){
        errors.password = '* Must be more than 8 characters'
    }

    if(values.repassword !== values.password){
        errors.repassword = '* Password don\'t match'
    }
    return errors
}

export const FormGroup = (props) => {
    const {input, label, type, placeholder, meta: {touched, error}} = props
    return (
        <div className="form-group">
            <label htmlFor={input.name}>{label}</label>

            { props.forgotpassword ? (
                <span className="forgot-password"><a href="/">Forgot password?</a></span>
            ) : null }

            <input {...input} id={input.name} type={type} className="form-control" placeholder={placeholder}/ >
            {touched && (error && <span>{error}</span>)}

            { props.icon ? 
                <FontAwesomeIcon icon={props.icon} onClick={props.handleOnClick} className="showNhide"/>
            : null }
        </div> 
    );
};
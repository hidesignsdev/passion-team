import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

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

export const FormGroup = (props) => {
    const {input, label, type, placeholder, meta: {touched, error}} = props
    return (
        <div className="form-group">
            <div className="form-label">
                <label htmlFor={input.name}>{label}</label>

                { props.forgotpassword ? (
                    <span className="forgot-password"><a href="/">Forgot password?</a></span>
                ) : null }
                
            </div>
            <input {...input} 
                id={input.name} 
                type={type} 
                className="form-control" 
                placeholder={placeholder}
            />

            { props.icon ? 
                <FontAwesomeIcon icon={props.icon} onClick={props.handleOnClick} className="showNhide"/>
            : null }

            {touched && (error && <span className="validate-error">{error}</span>)}
        </div> 
    );
};
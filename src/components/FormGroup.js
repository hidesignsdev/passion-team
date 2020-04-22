import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorMessage } from 'formik';

export const FormGroup = ({field, ...props}) => {
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
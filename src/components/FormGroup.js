import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
const FormGroup = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.input.name}>{props.label}</label>

            { props.forgotpassword ? (
                <span className="forgot-password"><a href="/">Forgot password?</a></span>
            ) : null }

            <input {...props.input} id={props.input.name} type={props.type} className="form-control" placeholder={props.placeholder}/ >
            
            { props.icon ? 
                <FontAwesomeIcon icon={props.icon} onClick={props.handleOnClick} className="showNhide"/>
            : null }
        </div> 
    );
};

export default FormGroup;
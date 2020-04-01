import React from 'react';

const FormGroup = (props) => {
    console.log(props)
    return (
        <div className="form-group">
            <label>{props.label}</label>
            {props.forgotpassword ? (
                <span className="forgot-password"><a href="/">Forgot password?</a></span>
            ) : null}
            <input type={props.type} className="form-control" placeholder={props.placeholder}/ >
        </div>
    );
};

export default FormGroup;
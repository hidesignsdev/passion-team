import React from 'react';
import FormGroup from './FormGroup';
import {Link} from 'react-router-dom'
const SignUp = () => {
    return (
        <form>
            <img src="#" alt="empty"/>
            <div>
                <FormGroup 
                    label="First name"
                    type="text"
                    placeholder="Jin-young"
                />
                <FormGroup 
                    label="Last name"
                    type="text"
                    placeholder="Park"
                />
                <FormGroup 
                    label="Email"
                    type="email"
                    placeholder="parkjinyoung@gmail.com"
                />
                <FormGroup 
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                />
                <FormGroup 
                    label="Confirm your password"
                    type="password"
                    placeholder="Re-enter your password"
                />
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </div>
            <p className="bottom">
                Already have account? <Link to={"/sign-in"}>Sign In</Link>
            </p>
        </form>
    );
};

export default SignUp;
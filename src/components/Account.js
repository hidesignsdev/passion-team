import React, { Component } from 'react';
import { connect } from 'react-redux'

class Account extends Component {
    render() {
        return (
            <div className="auth-inner">
                <div className="header">
                    <img/>
                    <h2>Park JinYoung</h2>
                </div>

                <div className="main">
                    <button className="button">View Profile</button>
                    <hr/>
                    <button className="button">Change Password</button>
                    <hr/>
                    <button className="alert">Sign Out</button>
                </div>

                <div className="footer"></div>
            </div>
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
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account);
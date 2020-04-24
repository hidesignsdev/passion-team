import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signOut } from '../actions/index'

class Account extends Component {
    render() {
        return (
            <div className="auth-inner">
                <div className="header">
                    <img src={this.props.auth.user.avatarUrl} alt="avatar"/>
                    <h2>{this.props.auth.user.lastName+ ' ' + this.props.auth.user.firstName}</h2>
                </div>

                <div className="main">
                    <button className="button">View Profile</button>
                    <hr/>
                    <button className="button">Change Password</button>
                    <hr/>
                    <button className="alert" onClick={this.props.signOut}>Sign Out</button>
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
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account);
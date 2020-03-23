import React, { Component } from 'react'

export default class Output extends Component {
    render() {
        return (
            <div className="output-container">
                {this.props.githubUser.information.avatar_url && <img src={this.props.githubUser.information.avatar_url} alt="profile-pic" />}
                <div className="username">
                    <h1>{this.props.githubUser.information.name}</h1>
                    <h4>{this.props.githubUser.information.login}</h4>
                </div>
                <div className="user-bio">
                    {this.props.githubUser.information.bio}
                </div>
                <div className="user-vcard">{this.props.githubUser.information.company}</div>
                <button onClick={this.props.handleOnBack}>Back</button>
            </div>
        )
    }
}

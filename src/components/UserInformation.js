import React, { Component } from 'react'

export default class UserInformation extends Component {
    render() {
        const {avatar_url, name, login, bio, company} = this.props.githubUser
        return (
            <div className="output-container">
                <img src={avatar_url} alt="profile-pic" />
                <div className="username">
                    <h1>{name}</h1>
                    <h4>{login}</h4>
                </div>
                <div className="user-bio">
                        {bio}
                </div>
                <div className="user-vcard">{company}</div>
                <button onClick={this.props.handleOnBack}>Back</button>
            </div>
        )
    }
}

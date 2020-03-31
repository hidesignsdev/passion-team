import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div className="input-container">
                <div className="input-box">
                    <label htmlFor="URL">URL</label>
                    <input 
                        value={this.props.URL} id="URL" 
                        onChange={this.props.handleOnChange} 
                        placeholder="https://api.github.com/users/{Enter username}"
                    />
                </div>
                <button onClick={this.props.handleOnClick}>Fetch</button>
            </div>
        )
    }
}

import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchInfo } from './actions'

class App extends React.Component {
  state = {
    URL: ""
  }
  handleOnChange = (e) => {
    this.setState({
      URL: e.target.value
    })
  }
  handleOnClick = () => {
    this.props.fetchInfo(this.state.URL)
    console.log(this.props.githubUser)
  }
  render() {
    return (
      <div className="Wrapper">
        {!this.props.githubUser.visibility &&
          <div className="container">
            <div>URL: <input value={this.state.URL} onChange={this.handleOnChange} /></div>
            <div>
              <button onClick={this.handleOnClick}>Fetch</button>
            </div>
          </div>
        }
        <div className="container">
          <img src={this.props.githubUser.information.avatar_url} />
          <div className="username">
            <h1>
              <span>{this.props.githubUser.information.name}</span>
              <span>{this.props.githubUser.information.login}</span>
            </h1>
          </div>
          <div className="user-bio">
            {this.props.githubUser.information.bio}
          </div>
          <div className="user-vcard">{this.props.githubUser.information.company}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: (URL) => dispatch(fetchInfo(URL))
  }
}

const mapStateToProps = (state) => {
  return {
    githubUser: state.githubUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

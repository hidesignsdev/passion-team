import React from 'react';
import './App.scss';
import Input from './components/Input'
import Output from './components/Output'

import { connect } from 'react-redux';
import { fetchInfo, viewInfo } from './actions'

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
  }

  handleOnBack = () => {
    this.props.viewInfo(false)
  }

  render() {
    let information;
    if (!this.props.githubUser.visibility) {
      information = (
        <Input
          URL={this.state.URL}
          handleOnChange={this.handleOnChange}
          handleOnClick={this.handleOnClick}
        />
      )
    }
    else information = (
      <Output
        githubUser={this.props.githubUser}
        handleOnBack={this.handleOnBack}
      />
    )
    return (
      <div className="wrapper">
        {information}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: (URL) => dispatch(fetchInfo(URL)),
    viewInfo: (filter) => dispatch(viewInfo(filter))
  }
}

const mapStateToProps = (state) => {
  return {
    githubUser: state.githubUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

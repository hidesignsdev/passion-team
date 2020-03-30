import React from 'react';
import '../App.scss';
import Input from '../components/Input'
import UserInformation from '../components/UserInformation'
import LoadingOverlay from 'react-loading-overlay'

import { connect } from 'react-redux';
import { requestData, reset } from '../actions' 

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
    this.props.requestData(this.state.URL) 
  }

  handleOnBack = () => {
    this.props.reset()
  }

  render() {
    console.log(this.props.githubUser)
    let layout
    if(!this.props.githubUser.visibility) layout = (
      <Input
        URL={this.state.URL}
        handleOnChange={this.handleOnChange}
        handleOnClick={this.handleOnClick}
      />
    )
    else layout = (
      <UserInformation
        error={this.props.githubUser.error}
        githubUser={this.props.githubUser.information}
        handleOnBack={this.handleOnBack}
      />
    )

    return (
      <LoadingOverlay
        active={this.props.githubUser.isLoading}
        spinner
        text='Loading...'
      >
        <div className="wrapper">
          {layout}
          {this.props.githubUser.error ? <h3>Invalid Username</h3> : null}
        </div>
      </LoadingOverlay>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestData: (URL) => dispatch(requestData(URL)),
    reset: () => dispatch(reset())
  }
}

const mapStateToProps = (state) => {
  return {
    githubUser: state.githubUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

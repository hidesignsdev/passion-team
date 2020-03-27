import React from 'react';
import '../App.scss';
import Input from '../components/Input'
import Output from '../components/Output'

import { connect } from 'react-redux';
import { requestData, viewInfo } from '../actions' 

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
    this.props.viewInfo(false)
  }

  render() {
    let information;
    if (this.props.githubUser.visibility === false) {
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
    requestData: (URL) => dispatch(requestData(URL)),
    viewInfo: (filter) => dispatch(viewInfo(filter))
  }
}

const mapStateToProps = (state) => {
  return {
    githubUser: state.githubUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

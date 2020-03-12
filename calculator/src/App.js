import React, { Component } from 'react';
import './App.css';
import Output from './components/Output';
import KeyPad from './components/KeyPad';

class App extends Component {
  state = {
    result: ''
  }
  buttonPressed = buttonName => {
    if (buttonName === '=') {
      this.calculate();
    }else if(buttonName === 'C') {
      this.erase();
    }else if(buttonName === 'CE') {
      this.backspace();
    }else {
      this.setState({
        result: this.state.result + buttonName
      });
    }
  }
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }
  erase = () => {
    this.setState({
      result: ''
    });
  }
  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    });
  }
  render() {
    return (
      <div className="App calc-body">
        <Output result={this.state.result} />
        <KeyPad buttonPressed={this.buttonPressed}/>
      </div>
    );
  }
}

export default App;

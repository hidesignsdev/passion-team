/* eslint no-eval: 0 */
import React, { Component } from 'react';
import './App.css';
import Output from './components/Output';
import KeyPad from './components/KeyPad';
import Formula from './components/Formula';

import {connect} from 'react-redux';
import {numberInput, decimalInput, operatorInput, clear, evaluate} from './actions';

class App extends Component {

  render() {
    return (
      <div>
        <div className='calculator'>
          <Formula formula={this.props.calculator.formula} />
          <Output currentVal={this.props.calculator.currentVal} />
          <KeyPad
            initialize={this.props.Initial}
            decimal={this.props.SubmitDecimalInput}
            evaluate={this.props.Evaluated}
            number={(event) => this.props.SubmitNumberInput(event.target.value)}
            operator={(event) => this.props.SubmitOperatorInput(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SubmitNumberInput: (number) => {dispatch(numberInput(number))},
    SubmitDecimalInput: () => {dispatch(decimalInput())},
    SubmitOperatorInput: (operator) => {dispatch(operatorInput(operator))},
    Initial: () => {dispatch(clear())},
    Evaluated: () => {dispatch(evaluate())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

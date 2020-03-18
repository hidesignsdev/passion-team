/* eslint no-eval: 0 */
import React, { Component } from 'react';
import './App.css';
import Output from './components/Output';
import KeyPad from './components/KeyPad';
import Formula from './components/Formula';

import {connect} from 'react-redux';
import {numberInput, decimalInput, operatorInput, clear, evaluate} from './actions';

const isOperator = /[*/+-]/,
  endWithOperator = /([*/+-])$/,
  endWithNegative = /([*/+])-$/,
  endWithDigitAndNegative = /(\d+[-])$/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0",
      prevVal: "0",
      formula: ""
    }
  }

  initialize = () => {
    this.props.dispatch(clear())
  }

  handleNumbers = (e) => {
    this.props.dispatch(numberInput(e.target.value))
  }

  handleOperators = (e) => {
    this.props.dispatch(operatorInput(e.target.value))
  }

  handleEvaluate = () => {
    this.props.dispatch(evaluate())
  }

  handleDecimal = (e) => {
    this.props.dispatch(decimalInput())
  }

  render() {
    return (
      <div>
        <div className='calculator'>
          <Formula formula={this.props.calculator.formula} />
          <Output currentVal={this.props.calculator.currentVal} />
          <KeyPad
            initialize={this.initialize}
            decimal={this.handleDecimal}
            evaluate={this.handleEvaluate}
            number={this.handleNumbers}
            operator={this.handleOperators}
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

export default connect(mapStateToProps, null)(App);

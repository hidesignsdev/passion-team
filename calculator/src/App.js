import React, { Component } from 'react';
import './App.css';
import KeyPad from './components/KeyPad';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const intialState = {
  result: ''
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case 'CALCULATE':
      const temp = eval(state.result)
      if (parseInt(temp)!== temp) {
        return{
          result: (parseFloat(eval(state.result))).toFixed(2)
        };
      } else if (temp === '') {
        return{
          result: ''
        };
      } else {
        return{
          result: eval(state.result)
        };
      }
    case 'ERASE':
      return{
        result: ''
      };
    case 'BACKSPACE':
      return{
        result: state.result.slice(0, -1)
      };
    case '1':
      return{
        result: state.result +'1'
      };
    case '2':
      return{
        result: state.result +'2'
      };
    case '3':
      return{
        result: state.result +'3'
      };
    case '4':
      return{
        result: state.result +'4'
      };
      
    case '5':
      return{
        result: state.result +'5'
      };
    case '6':
      return{
        result: state.result +'6'
      };
    case '7':
      return{
        result: state.result +'7'
      };
    case '8':
      return{
        result: state.result +'8'
      };
    case '9':
      return{
        result: state.result +'9'
      };
    case '0':
      return{
        result: state.result +'0'
      };
    case '/':
      return{
        result: state.result +'/'
      };
    case '*':
      return{
        result: state.result +'*'
      };
    case '-':
      return{
        result: state.result +'-'
      };
    case '+':
      return{
        result: state.result +'+'
      }; 
    case '.':
      return{
        result: state.result +'.'
      };                           
    default:
      return state;
  }
}

const store = createStore(reducer);
class App extends Component { 
  render() {
    return (
      <div className="App calc-body">
        <Provider store={store}>
          <KeyPad />
        </Provider>
      </div>
    );
  }
}

export default App;
import React, { Component} from "react";
import { connect }  from 'react-redux';
import Output from "./Output";

class KeyPad extends Component {
    buttonPressed = (e) => {
        if (e.target.name === '=') {
          this.props.dispatch({ type: 'CALCULATE'});
        }else if(e.target.name === 'C') {
          this.props.dispatch({ type: 'ERASE'});
        }else if(e.target.name === 'CE') {
          this.props.dispatch({ type: 'BACKSPACE'});
        }else {
          this.props.dispatch({ type: e.target.name});
        }
      }

    render() {
        return(
            <div className="buttons">
                <Output result={this.props.result}/>
                <button name='C'onClick={this.buttonPressed}>C</button>
                <button name='CE'onClick={this.buttonPressed}>CE</button>
                <button name='/'onClick={this.buttonPressed}>/</button>
                <button name='-'onClick={this.buttonPressed}>-</button>
                <button name='7'onClick={this.buttonPressed}>7</button>
                <button name='8'onClick={this.buttonPressed}>8</button>
                <button name='9'onClick={this.buttonPressed}>9</button>
                <button name='*'onClick={this.buttonPressed}>*</button>
                <button name='4'onClick={this.buttonPressed}>4</button>
                <button name='5'onClick={this.buttonPressed}>5</button>
                <button name='6'onClick={this.buttonPressed}>6</button>
                <button name='+'onClick={this.buttonPressed}>+</button>
                <button name='1'onClick={this.buttonPressed}>1</button>
                <button name='2'onClick={this.buttonPressed}>2</button>
                <button name='3'onClick={this.buttonPressed}>3</button>
                <button name='.'onClick={this.buttonPressed}>.</button>
                <button name='0'onClick={this.buttonPressed}style={{width: '50%'}}>0</button>
                <button name='='onClick={this.buttonPressed}style={{width: '50%'}}>Equal</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        result: state.result
    };
}

export default connect(mapStateToProps)(KeyPad);
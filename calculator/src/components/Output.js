import React, { Component } from "react";
import { Provider } from 'react-redux';

export default class Output extends Component {
    render(){
        return(
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}


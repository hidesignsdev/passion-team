import React from 'react';
import { connect } from 'react-redux';

import { genarateQuote } from './actions';
import quotes from './resources/quotes';
import './style.css';

const colors = ['rgb(155, 89, 182)', 'rgb(52, 34, 36)', 'rgb(44, 62, 80)', 'rgb(22, 160, 133)', 'rgb(231, 76, 60)', 'rgb(39, 174, 96)']

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ''
    }
  }

  componentDidMount() {
    this.setState({
      color: this.getRandomColor()
    })
    this.props.dispatch(genarateQuote(this.getRandomQuote()))
  }

  handleChange = () => {
    this.setState({
      color: this.getRandomColor()
    })
    this.props.dispatch(genarateQuote(this.getRandomQuote()))
  }

  getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  render() {
    const { color } = this.state
    const buttonColor = {
      'backgroundColor': color,
      'opacity': 0.8,
      'transition': '1s'
    }
    const randomColor = {
      ...buttonColor,
      'color': color
    }
    return (
      <div className="wrapper" style={randomColor}>
        <div id="quote-box">
          <p id="text">{this.props.quote.content}</p>
          <p id="author">- {this.props.quote.author}</p>
          <div className="container">
            <a id='tweet-quote' href='twitter.com/intent/tweet' style={buttonColor}>Tweet</a>
            <button id="new-quote" onClick={this.handleChange} style={buttonColor}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quoteGenarate
  }
}

export default connect(mapStateToProps)(RandomQuoteMachine);

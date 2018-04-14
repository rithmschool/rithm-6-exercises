import React, { Component } from 'react';
import heads from './heads.jpg';
import tails from './tails.jpg';
import { Coin } from './Coin';
import { choice } from './helpers';
import './CoinContainer.css';

class CoinContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinStatus: this.props.heads,
      totalCount: 0,
      headCount: 0,
      tailCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(idx) {
    this.setState(prevState => {
      let newState = [...prevState.coinStatus];
      newState.coinStatus = choice(this.props.coinStatus);
      if (newState.coinStatus === './heads.png') newState.headCount++;
      newState.tailCount++;
      return { coinStatus: newState };
    });
  }

  render() {
    return (
      <div className="CoinContainer">
        <h1>Let's flip a coin!</h1>
        <img src={this.state.coinStatus} />
        <br />
        <button onClick={this.handleClick}>FLIP COIN</button>
        <p>
          Out of {this.state.totalCount} flips, there have been{' '}
          {this.state.headCount} heads and {this.state.tailCount} tails.
        </p>
      </div>
    );
  }
}

CoinContainer.defaultProps = {
  coinStatus: ['./heads.png', './tails.png']
};

export default CoinContainer;

import React, { Component } from 'react';
import frontCoin from './frontCoin.png';
import backCoin from './backCoin.png';
import './App.css';
import DisplayCoin from './DisplayCoin';
// import CoinStatus from './CoinStatus';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeads: true,
      numHeads: 0,
      numTails: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.randomNum = this.randomNum.bind(this);
  }

  randomNum() {
    let isHeads;
    const random = Math.random();
    if (random < 0.5) isHeads = false;
    else if (random > 0.5) isHeads = true;
    return isHeads;
  }

  handleClick() {
    let isHeads = this.randomNum();
    if (isHeads) {
      this.setState(() => ({ numHeads: this.state.numHeads + 1 }));
      this.setState({ isHeads: true });
    } else if (!isHeads) {
      this.setState(() => ({ numTails: this.state.numTails + 1 }));
      this.setState({ isHeads: false });
    }
  }

  render() {
    let coinImg;
    if (this.state.isHeads) coinImg = frontCoin;
    else coinImg = backCoin;
    let message = `Our of ${this.state.numHeads +
      this.state.numTails} flips, there have been ${
      this.state.numHeads
    } heads and ${this.state.numTails} tails`;
    return (
      <div className="App">
        <h1>Let's Flip a Coin!</h1>
        <DisplayCoin image={coinImg} />
        <button onClick={this.handleClick}>Flip Coin</button>
        <p>{message}</p>
      </div>
    );
  }
}

export default App;

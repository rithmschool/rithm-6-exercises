import React, { Component } from 'react';
import frontCoin from './frontCoin.png';
import backCoin from './backCoin.png';
import './App.css';
import DisplayCoin from './DisplayCoin';
import CoinStatus from './CoinStatus';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeads: true,
      numHeads: 0,
      numTails: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isHeads) {
      this.setState(() => ({ numHeads: this.state.numHeads + 1 }));
    } else {
      this.setState(() => ({ numTails: this.state.numTails + 1 }));
    }
    this.setState(() => ({ isHeads: !this.state.isHeads }));
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
        {/* <CoinStatus />
         */}
      </div>
    );
  }
}

export default App;

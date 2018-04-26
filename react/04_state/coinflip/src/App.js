import React, { Component } from 'react';
import DisplayCoin from './DisplayCoin';
import './DisplayCoin.css';
import heads from './heads.png';
import tails from './tails.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: true,
      headCount: 0,
      tailCount: 0
    };
    this.random = this.randomCoin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  randomCoin() {
    const n = Math.random();
    if (n < 0.5) return 'head';
    if (n > 0.5) return 'tails';
  }

  handleClick() {
    if (this.randomCoin() === 'head') {
      this.setState(() => ({ headCount: this.state.headCount + 1 }));
      this.setState({ heads: true });
    } else if (this.randomCoin() === 'tails') {
      this.setState(() => ({ tailCount: this.state.tailCount + 1 }));
      this.setState({ heads: false });
    }
  }

  render() {
    let coin;
    if (this.state.heads) {
      coin = heads;
    } else {
      coin = tails;
    }
    let msg = `Out of ${this.state.headCount + this.state.tailCount} rolls, ${
      this.state.headCount
    } have been heads and ${this.state.tailCount} have been tails`;
    return (
      <div className="CoinFlip">
        <h1>Wanna flip a coin?</h1>
        <DisplayCoin image={coin} />
        <button onClick={this.handleClick}>Flip MEEE!!!!!</button>
        <p>{msg}</p>
      </div>
    );
  }
}

export default App;

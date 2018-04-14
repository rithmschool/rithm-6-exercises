import React, { Component } from 'react';
import './CoinContainer.css';

class CoinContainer extends Component {
  render() {
    return (
      <div className="CoinContainer">
        <header className="CoinContainer-header">
          <h1 className="CoinContainer-title">Let's flip a coin!</h1>
        </header>
        <img src="./heads.png" alt="heads" />
        <button>FLIP COIN</button>
      </div>
    );
  }
}

export default CoinContainer;

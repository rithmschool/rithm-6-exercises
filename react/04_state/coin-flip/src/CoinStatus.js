import React, { Component } from 'react';

class CoinStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numHeads: 0,
      numTails: 0
    };
  }
  render() {
    let message = `Our of ${this.state.numHeads +
      this.state.numTails} flips, there have been ${
      this.state.numHeads
    } heads and ${this.state.numTails} tails`;
    return <p>{message}</p>;
  }
}

export default CoinStatus;

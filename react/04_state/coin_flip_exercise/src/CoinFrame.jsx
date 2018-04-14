import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu",
      numFlips: 0,
      numHeads: 0,
      numTails: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let idx = Math.floor(Math.random() * 2);
    let newState = { ...this.state };
    newState.src = this.props.src[idx];
    newState.numFlips++;
    idx === 0 ? newState.numHeads++ : newState.numTails++;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Coin src={this.state.src} />
        <button onClick={this.handleClick} >Click to Flip!</button>
        <p>`Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.`</p>
      </div>
    );
  }
}

CoinFrame.defaultProps = {
  src: ["https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu",
    "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"]
};

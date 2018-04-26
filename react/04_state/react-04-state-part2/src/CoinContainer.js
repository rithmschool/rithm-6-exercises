import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";
import "./Coin.css";

export default class CoinContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalFlips: 0,
      totalHeads: 0,
      totalTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      let newState = [...prevState];
      const coin = choice(this.props.coins);
      newState.currentCoin = coin;
      if (coin.side === "head") {
        newState.totalHeads = prevState.totalHeads + 1;
      } else {
        newState.totalTails = prevState.totalTails + 1;
      }
      newState.totalFlips = prevState.totalFlips + 1;
      return newState;
    });
  }
  render() {
    const coin = this.state.currentCoin ? (
      <Coin info={this.state.currentCoin} />
    ) : (
      ""
    );
    return (
      <div className="CoinContainer">
        <h2>Let's flip a coin</h2>
        {coin}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.totalFlips} flips, there have been{" "}
          {this.state.totalHeads} heads and {this.state.totalTails} tails.
        </p>
      </div>
    );
  }
}

CoinContainer.defaultProps = {
  coins: [
    {
      side: "head",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
    },
    {
      side: "tail",
      imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
    }
  ]
};

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
import { choice } from "./helper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      head: 0,
      tail: 0,
      src: ""
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    this.setState(prevState => {
      let newState = { ...prevState };
      newState.src = choice(this.props.coin);
      if (
        newState.src ===
        "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/penny-cent-coin-tail.jpg"
      ) {
        newState.tail++;
        newState.total++;
      } else {
        newState.head++;
        newState.total++;
      }
      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <Image src={this.state.src} />

        <p>
          Out of {this.state.total} flips, there have been {this.state.tail}{" "}
          tail and {this.state.head} head
        </p>

        <button onClick={this.flipCoin}>Flip Me</button>
      </div>
    );
  }
}

export default App;

App.defaultProps = {
  coin: [
    "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/penny-cent-coin-tail.jpg",
    "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/penny-cent-coin-head.jpg"
  ]
};

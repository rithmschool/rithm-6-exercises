import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heads from './coinImageHeads.js';
import Tails from './coinImageTails.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: true,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    if (this.state.heads === true) {
      this.setState(prevState => {
        return { heads: false, count: this.state.count + 1 };
      });
    } else {
      this.setState(prevState => {
        return { heads: true, count: this.state.count + 1 };
      });
    }
    console.log(this.state.count);
  }
  render() {
    let coin;
    if (this.state.heads === true) {
      coin = <Heads />;
    } else {
      coin = <Tails />;
    }
    return (
      <div className="coinContainer">
        <h3>You have flipped the coin {this.state.count} times</h3>
        {coin}
        <button onClick={this.handleClick}>Click here to flip</button>
      </div>
    );
  }
}
export default App;

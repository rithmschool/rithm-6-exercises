import React, { Component } from 'react';

class DisplayCoin extends Component {
  render() {
    return <img src={this.props.image} alt="Coin img" />;
  }
}

export default DisplayCoin;

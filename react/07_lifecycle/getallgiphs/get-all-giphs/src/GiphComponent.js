import React, { Component } from 'react';

export default class Giph extends Component {
  render() {
    return <img src={this.props.url} alt="none" />;
  }
}

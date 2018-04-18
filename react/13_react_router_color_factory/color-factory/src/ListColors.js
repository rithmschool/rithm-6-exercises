import React, { Component } from 'react';

class ListColors extends Component {
  state = {};
  render() {
    const colors = this.props.Colors.map(color => {
      return <li>{color.name}</li>;
    });
    return <div>{colors}</div>;
  }
}

export default ListColors;

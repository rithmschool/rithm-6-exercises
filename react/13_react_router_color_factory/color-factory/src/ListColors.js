import React, { Component } from 'react';

class ListColors extends Component {
  render() {
    const colors = this.props.Colors.map((color, index) => {
      return <li key={index}>{color.name}</li>;
    });
    return (
      <div>
        <ul>{colors}</ul>
      </div>
    );
  }
}

export default ListColors;

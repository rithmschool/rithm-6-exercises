import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListColors extends Component {
  render() {
    const colors = this.props.Colors.map((color, index) => {
      return (
        <li key={index}>
          <Link key={index} to={`/colors/${color.name}`}>
            {color.name}
          </Link>
        </li>
      );
    });
    return (
      <div>
        <h1>Welcome to ColorZone</h1>
        <h2>So. Many. Colors.</h2>
        <Link to="/colors/new">Add Color</Link>
        <p>Colors:</p>
        <ul>{colors}</ul>
      </div>
    );
  }
}

export default ListColors;

import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    return (
      <div>
        <li>
          <strong>{this.props.name}</strong>
          <img src={this.props.image} alt={this.props.name} />
          <p>Type: {this.props.type}</p>
        </li>
      </div>
    );
  }
}

export { Pokecard };

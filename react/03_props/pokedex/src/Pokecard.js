import React, { Component } from 'react';
import './Pokecard.css';
import { directive } from 'babel-types';

class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <p className="Pokecard-name">{this.props.name}</p>
        <img
          className="Pokecard-img"
          src={this.props.image}
          alt={this.props.name}
        />
        <p className="Pokecard-type">{this.props.type}</p>
      </div>
    );
  }
}

export { Pokecard };

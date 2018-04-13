import React, { Component } from 'react';
import './Pokecard.css';

export default class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <h2 className="Pokecard__name">{this.props.name}</h2>
        <img className="Pokecard__img" src={this.props.image} alt={this.props.name + 'ready for batttle!'} />
        <h3 className="Pokecard__type">{'Type: ' + this.props.type}</h3>
      </div>
    );
  }
}

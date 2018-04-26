import React, { Component } from 'react';
import './App.css';
export default class Pokecard extends Component {
  render() {
    return (
      <div className="card">
        <h3 class="name">{this.props.name}</h3>
        <img src={this.props.image} alt="" />
        <h4>{this.props.type}</h4>
      </div>
    );
  }
}

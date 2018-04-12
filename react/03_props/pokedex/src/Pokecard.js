import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Pokecard extends Component {
  render() {
    return (
      <li className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} />
        <p>
          <strong>Type:</strong> {this.props.type}
        </p>
      </li>
    );
  }
}

Pokecard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
};

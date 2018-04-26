import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pokedex.css";

export default class Pokemon extends Component {
  render() {
    return (
      <div>
        <div className="Pokemon">
          <h2>{this.props.name}</h2>
          <img src={this.props.image} alt="pokemon" />
          <p>Type: {this.props.type}</p>
        </div>
      </div>
    );
  }
}

Pokemon.PropTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
}

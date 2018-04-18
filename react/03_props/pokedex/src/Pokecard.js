import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pokecard.css";

export default class Pokecard extends Component {
  render() {
    return (
      <div className="pokecard" key={this.props.id}>
        <h2 className="name">{this.props.name}</h2>
        <img className="img" src={this.props.image} alt={this.props.name} />
        <h5 className="type">Type: {this.props.type}</h5>
      </div>
    );
  }
}

Pokecard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
};

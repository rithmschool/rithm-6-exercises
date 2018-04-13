import React, { Component } from "react";
import "./pokemon.css";

export default class Pokecard extends Component {
  render() {
    const { name, type, image } = this.props;
    return (
      <figure className="Pokecard">
        <h4>{name}</h4>
        <img src={image} alt="picture of {name}" />
        <h5>Type:{type}</h5>
      </figure>
    );
  }
}

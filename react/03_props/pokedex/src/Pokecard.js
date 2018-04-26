import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { name, type, image } = this.props;
    return (
      <div className="PokemonCard">
        <h2>{name}</h2>
        <img src={image} alt="{name}" />
        <h4>Type: {type}</h4>
      </div>
    );
  }
}

export default Pokecard;

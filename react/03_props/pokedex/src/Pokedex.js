import React, { Component } from "react";
import Pokecard from "./Pokecard";

export default class App extends Component {
  render() {
    var pokedex = this.props.pokemon.map(pokecard => {
      return (
        <Pokecard
          key={pokecard.id}
          name={pokecard.name}
          type={pokecard.type}
          image={pokecard.image}
        />
      );
    });
    return (
      <div>
        <h1>Pokedex</h1>
        <ul id="pokedex">{pokedex}</ul>
      </div>
    );
  }
}

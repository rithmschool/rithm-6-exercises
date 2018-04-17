import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pokemon } = this.props;
    let pokeCards = pokemon.map(pok => (
      <Pokecard
        key={pok.id}
        name={pok.name}
        type={pok.type}
        image={pok.image}
      />
    ));
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <div className="cards">{pokeCards}</div>
      </div>
    );
  }
}

Pokedex.defaultProps = {
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    }
  ]
};

export default Pokedex;
